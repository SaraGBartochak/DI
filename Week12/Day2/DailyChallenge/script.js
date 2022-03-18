const bigNum = require('./main.js');

const b = 5;
const largerNum = bigNum.largeNumber;
console.log(largerNum+ b);

console.log('hello')

const http = require('http');

const server = http.createServer((req,res)=> {
    console.log('My first server');
    res.end('Hi there at the frontend');
    if(req.url == 'http://localhost:3000/') {
        req.end('<h1>Hi there at the frontend</h1>')
    } else {
        req.end('<h1>page not found</h1>')
    }
       
})

server.listen(3000, ()=>{
    console.log('The server is listening')
})