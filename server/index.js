require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const db = require('./database');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/collections', async (req, res) => {
  try {
      const results = await db.query("select * FROM collections");
      console.log(results);
      res.status(200).json({
          status: "success",
          results: results.rows.length,
          data: {
              title: results.rows,    
          },
      });
  }
  catch(err) {
      console.log(err);
  }
});

app.listen(port, function () {
  console.log(`http://localhost:${port}`);
});