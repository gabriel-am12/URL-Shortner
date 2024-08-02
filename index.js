const express = require('express');
const app = express();
const shortUrl = require('./routes/url');
const homeRoutes = require('./routes/home');

// middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use('/urlapi', shortUrl);
app.use('', homeRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}`)
})