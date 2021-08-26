const express = require('express');
// const queries = require('../database/schema.js');
const cors = require('cors');
const path = require('path');

const router = require('./routes');

const app = express();

// serve static files from dist dir
app.use('/', express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

app.use('/scoreboard', router);

const port = 3005;
app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});
