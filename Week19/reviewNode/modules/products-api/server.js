const express = require('express');
const dotenv = require('dotenv');
const product_routes = require('./routes/products.js')
dotenv.config();

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(process.env.PORT||8080, ()=>{
  console.log(`listen on port ${process.env.PORT||8080}`);
})

app.use('/api/products',product_routes);
