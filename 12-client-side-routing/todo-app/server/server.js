'use strict'

const express = require('express');
const cors = require('cors');
const pg = require('pg');

const app = express();
const PORT = process.env.PORT;

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/tasks', (req, res) => {
  let SQL = 'SELECT * from tasks;';

  client.query(SQL)
    .then(results => res.send(results.rows))
    .catch(console.error);
});

app.post('/tasks/add', (request, response) => {
  // title, descrpition, category, contact, status 
  const {title, description, category, contact, status} = request.body;
  const SQL = 'INSERT INTO tasks(title, description, category, contact, status) VALUES ($1, $2, $3, $4, $5);' 
  let values = [title, description, category,contact, status];

  client.query(SQL, values)
    .then(response.status(201))
    .catch(response.status(500));
});


app.get('*', (req, res) => res.status(403).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
