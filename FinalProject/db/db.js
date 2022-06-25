const { Client } = require('pg');

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

client.connect().then(console.log("Connected to DB"))
.catch((err)=>{console.log("Something went wrong!",err.message)});

module.exports = client;