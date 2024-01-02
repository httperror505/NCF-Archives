const express = require('express');
const bodyParser = require('body-parser');
const fuzzball = require('fuzzball');

const app = express();
const port = process.env.PORT || 3000;

const documents = [
  'hello, world', 'my world' ,'hello mom' ,'the usage of it' ,
  'if and else' ,'uses of it' ,'hello and else' ,'out of the world' ,
  'yes mom' ,'yes of it' ,'if and mom'
];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/search', (req, res) => {
  const query = req.query.query;

  // Use fuzzball to perform a fuzzy search on documents
  const options = {
    force_ascii: false,  // Allows non-ASCII characters in strings
  };

  const results = fuzzball.extract(query, documents, options).map(result => result[0]);

  res.json(results);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
