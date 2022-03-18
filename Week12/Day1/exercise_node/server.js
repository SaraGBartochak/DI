const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('hello from server')
})

server.listen(3000, ()=>{
    console.log('server is listening to port 5000');
})