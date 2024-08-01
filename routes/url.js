const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");
const createDB = require("../config/db");
const URL = require("../models/urlModel");

const baseUrl =
  "https://ce0de3a6-7650-4cf9-bfbb-ca3b81d3741a-00-zf2btb93cnoi.spock.replit.dev/urlapi";

createDB.sync().then(() => {
  console.log("DB is connected");
});

router.post("/", async (req, res) => {
  try {
    const { longUrl } = req.body;
    const shortId = nanoid(4);
    const shortUrl = await URL.create({
      longUrl,
      shortUrl: shortId,
    });

    return res.status(200).json({
      status: "ok",
      shortUrl: `${baseUrl}/${shortId}`,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
});

router.get("/:short", async (req, res) => {
  let shortId = req.params.short;
  try {
    let url = await URL.findOne({
      where: {
        shortUrl: shortId,
      },
    });
    if(!url) {
      return res.status(404).send("Invalid short url");
    }
    return res.redirect(url.longUrl)
  } catch (e) {
    return res.status(500).send(e);
  }
})

module.exports = router;
