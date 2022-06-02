require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const  fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT ||3000

app.use(bodyParser.urlencoded({extended:false}));

app.use(fileUpload());

app.use(cors());
app.use(express.json());

// DB

const db = knex({
    client:'pg',
    connection:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE
    }
})
server.get('/', (req,res)=> {
    res.send(`<h1>This is a test</h1>`);
})

server.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})