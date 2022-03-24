const express = require('express');
const app = express ();
let data = [];

app.use(express.urlencoded())
app.use(express.json())
app.use('/', express.static(__dirname+'/public'))

app.post('/shop', (req, res)=>{
    console.log(req.body)
    res.send('hello Sara')

})
// app.get('/', (req, res) => {

//     res.sendFile('/shop.html', {root: __dirname});
//   });

  app.listen(7000, ()=>{
    console.log('listen on port 7000');
});