const express = require('express');
const dotenv = require('dotenv');
const { request } = require('express');
const cors = require('cors');


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


app.listen(process.env.PORT||3000, ()=>{
    console.log(`listen to port ${process.env.PORT||3000}`);
})

// app.get('/test', (req,res)=>{
//     res.send('hello')
// })

app.post('login',(req,res)=> {
    res.send(`Hello ${req.body.name}`)
})