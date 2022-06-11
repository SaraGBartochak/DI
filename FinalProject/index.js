require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const  fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT ||8000

app.use(bodyParser.urlencoded({extended:false}));

app.use(fileUpload());

app.use(cors());
app.use(express.json());

// DB

const knex = require('knex')({
    client:'pg',
    connection:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE
    }
})
app.get('/', async (req,res)=> {
    res.send(`<form action="/upload" enctype="multipart/form-data" method="post">
    <input type="file" name="pic" />
    <input type="submit" value="Upload a file" />
    </form>`);
})

app.post('/upload', async (req, res) => {
    const {name, data} = req.files.pic;
    if(name && data) {
        await knex.insert({name: name, img: data}).into('img');
        res.sendStatus(200);
    } else {
        res.sendStatus(400); 
    }
});

app.get('/img/:id', async (req, res) => {
    const id = req.params.id;
    const img = await knex('img').where({id: id}).first();
    if (img) {
        const contentType = await FileType.fromBuffer(img.img); // get the mimetype of the buffer (in this case its gonna be jpg but can be png or w/e)
        res.end(img.img);
    } else {
        res.end('No Img with that Id!');
    }
});

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})