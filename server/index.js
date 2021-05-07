require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const db = require('./database');
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/collections', async (req, res) => {
  try {
      const results = await db.query("select * FROM collections");
      res.status(200).json({
          status: "success",
          data: {
              collections: results.rows,    
          },
      });
  }
  catch(err) {
      console.log(err);
  }
});

app.get('/collections/:id', async (req, res) => {
  try {
     const results = await db.query("select * FROM collections WHERE id = $1", [req.params.id]);
     res.status(200).json({
          status: "success",
          data: {
              collections: results.rows
          }
      });
  }
  catch (err) {
      console.log(err);
  }
});

app.post('/collections', async (req, res) => {
  try {
      const results = await db.query(
          "INSERT INTO collections (title, summary, tag) values ($1, $2, $3) RETURNING *", 
          [req.body.title, req.body.summary, req.body.tag]
      );
      res.status(201).json({
          status: "success",
          data: {
              collections: results.rows[0]
          }
      });
  } catch (err) {
      console.log(err);
  }
});

app.put('/collections/:id', async (req, res) => {
  try {
      const results = await db.query(
          "UPDATE collections SET title = $1, summary = $2, tag = $3 WHERE id = $4 RETURNING *",                                   
          [req.body.title, req.body.summary, req.body.tag, req.params.id]
      );
      res.status(200).json({
          status: "success",
          data: {
              collections: results.rows[0]
          }
      });  
  } catch (err) {
      console.log(err);
  }
});

app.delete('/collections/:id', async (req, res) => {
  try {
      const results = await db.query("DELETE FROM collections WHERE id = $1", [req.params.id]);
      res.status(204).json({
          status: "success"
      });
  } catch (err) {
      console.log(err);
  }
});

app.listen(port, function () {
  console.log(`http://localhost:${port}`);
});