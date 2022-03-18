const dateAndTime = require('./main.js');


const http = require('http');
const server = http.createServer((req,res) => {

    console.log('Im listening.......');
    res.end(`The date and time are currently : ${dateAndTime.getCurrentDateTime()}`);
}); 

server.listen(8080);