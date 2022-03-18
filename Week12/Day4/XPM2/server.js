// const express = require('express')
// const app = express();

// app.use('/', express.static(__dirname+'public'));

// app.get('/user', (req, res) => {
    
    // const user = {

//     firstname: 'John',
//     lastname: 'Doe'
// }

// res.json(user);
// })

// app.listen(3000, () => {
//   console.log(`Example app listening on port 3000`)
// })

// Exercise 2 : Express & Parameters

const express = require('express')
const app = express();

app.get('/:id', (req, res) => {
    res.json(req.params);
  })

  app.listen(3000, ()=>{
      console.log('Port 3000/1234')
  })