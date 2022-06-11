require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const  fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT ||8000
// parse application
app.use(bodyParser.urlencoded({extended:false}));

app.use(fileUpload());

app.use(cors());
// parse application/json
app.use(express.json());

// DB

const knex = require('knex')({
    client:'pg',
    connection:{
        filename: "./img.db",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE
    }
})

app.get('/', async (req, res) => {
    res.send('Hello')
})

app.post('/upload', async(req, res) => {
    const {name, data} = req.files.img;
    if(name && data) {
        await knex.insert({name: name, img: data}).into('img');
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
})

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})