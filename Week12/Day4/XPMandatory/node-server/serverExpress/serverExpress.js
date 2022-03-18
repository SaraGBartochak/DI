const express = require('express');
const app = express ();

app.get('/', (req, res)=>{
    res.send('<h1>This is a server express</h1>')
});

app.listen(3002, ()=>{
    console.log('Hello server 3000')
});
