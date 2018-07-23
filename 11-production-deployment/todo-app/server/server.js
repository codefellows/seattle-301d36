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

// Note: this is our proof of life for deployment.
// app.get('/', (req, res) => res.send('Testing 1, 2, 3'));

app.get('/tasks', (req, res) => {
  let SQL = 'SELECT * from tasks;';
  
  client.query(SQL)
    .then(results => res.send(results.rows))
    .catch(console.error);
});

app.get('*', (req, res) => res.status(403).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

// PORT=3000

// Mac:
// DATABASE_URL=postgres://localhost:5432/task_app

// Windows:
// DATABASE_URL=postgres://USER:PASSWORD@localhost:5432/task_app