const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const randomQuotes = require('.json/quotes.json');
const generate = () => {
     const index = Math.floor(Math.random() * randomQuotes.length);
     const randomQuote = randomQuotes[index];

     return randomQuote
}

module.exports = {
     generate
};
const server = app.listen(3001, () => {
     console.log('listening on port %s...', server.address().port);
   });