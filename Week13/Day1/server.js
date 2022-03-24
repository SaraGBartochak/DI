const express = require('express');
const app = express();
const knex = require('knex');

const dotenv = require('dotenv')

dotenv.config();

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://username:password@host:port/database')

app.listen(6000, ()=>{
    console.log('Is conected');
})

db.one('SELECT $1 AS value', 123)
  .then((data) => {
    console.log('DATA:', data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })