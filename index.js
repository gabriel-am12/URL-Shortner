const express = require('express');
const app = express();

// middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const PORT = 1337
app.listen(POST, () => {
  console.log(`Server is running on port ${PORT}`)
})