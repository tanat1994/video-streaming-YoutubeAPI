const express = require('express');
const bodyParser = require('body-parser');

const dummyData = require('./dummy-data/dummy');
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/video_list', (req, res) => {
  res.json(dummyData);
});

app.listen(port, () => {
  console.log(`API is up on PORT ${port}`);
});
