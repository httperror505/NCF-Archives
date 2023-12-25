const express = require('express');
const bodyParser = require('body-parser');
const fuzzy = require('fuzzywuzzy');

const app = express();
// const port = 3000;

const documents = ['hello, world', 'my world' ,'hello mom' ,'the usage of it' ,'if and else' ,'uses of it' ,'hello and else' ,'out of the world' ,'yes mom' ,'yes of it' ,'if and mom'];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/search', (req, res) => {
  const query = req.query.query;

  // Use fuzzywuzzy to perform a fuzzy search on documents
  const results = fuzzy.filter(query, documents).map(result => result.string);

  res.json(results);
});

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
app.listen(process.env.PORT || 3000, () => console.log('Listening on http://localhost:3000'));