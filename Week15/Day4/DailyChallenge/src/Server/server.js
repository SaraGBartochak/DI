const express = require('express');
const app = express();

app.get('/api/hello', (req,res)=> {
    res.end('Hello from Express')
})

app.listen(3001, ()=>{
    console.log('Listen to port 3001')
})