const express = require('express');
const router = require('./routes/router');
const cors = require('cors')

const app = express();
const port = process.env.PORT || '3000';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.listen(port, () => {
  console.log('listening on '+port)
});
module.exports = app;