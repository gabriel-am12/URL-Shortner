const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', async (req, res) => {
  console.log('__dirName', __dirname);
  const htmlPath = path.join(__dirname, '..', 'index.html');
  res.sendFile(htmlPath);
  
});

module.exports = router;