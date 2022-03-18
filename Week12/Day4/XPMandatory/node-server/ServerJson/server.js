const http = require('http');

const sendJson = (req, res)=>{
    const user = {
        firstname: 'John',
        lastname: 'Doe', 
    }
      
    const jsonContent = JSON.stringify(user);
    res.end(jsonContent);
  };
    
    const server = http.createServer(sendJson);
    
    server.listen(8080, ()=>{
    console.log('Server listening to port 8080')
})

