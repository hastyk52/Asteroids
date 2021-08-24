const express = require('express');
// const queries = require('../database/schema.js');
const cors = require('cors');
const path = require('path');

const app = express();

// serve static files from dist dir
app.use('/', express.static(path.join(__dirname, '../dist')));
// use express.json for parsing JSON
app.use(express.json());
// use cors middleware for enabling CORS with various options
app.use(cors());

// app.get('/entries', (req, res) => {
//   // queries.getEntry(req.query.name, (err, entry) => {
//   //   if (err) {
//   //     res.status(404).send(err);
//   //   } else {
//   //     res.status(200).send(entry);
//   //   }
//   // })
// });

const port = 3004;
app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});
