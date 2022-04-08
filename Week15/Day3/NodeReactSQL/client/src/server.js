const express = require(`express`);
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

dotenv.config();

app.listen(process.env.PORT || 5000, ()=>{
    console.log('listen to port ')

    app.get('test', (req, res)=>{
        res.end('hello')
    })
})

app.get('/insert', (req, res)=>{
    db.insertText(req.body.text)
    .then(retdata=>{
        res.json(retdata)
    })
    .catch({massage:e.message})
})
