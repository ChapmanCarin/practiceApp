const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { apiRouter } = require('../api/polls');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🚀`);
});
