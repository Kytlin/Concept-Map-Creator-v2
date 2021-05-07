require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/api', (req, res) => {
  res.send(mockResponse);
});


app.listen(port, function () {
 console.log(`http://localhost:${port}`);
});