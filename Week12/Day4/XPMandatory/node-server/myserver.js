const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('headers', req.headers);
    res.writeHead(200);
    res.end(`<h1>This is HTML</h1>`+
    '<h2>This is a new line</h2>'+
    '<p>This is the last line</p>')
})

server.listen(3000, ()=>{
    console.log('Server listening to port 3000')
})



