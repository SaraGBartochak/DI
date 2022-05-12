const express = require('express');
const dotenv = require('dotenv');
const {getAllProducts} = require('./modules/db-products.js')
dotenv.config();

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(process.env.PORT||8080, () => {
    console.log(`listen on port ${process.env.PORT8080}` )
})

app.get('/api/products', (req,res)=> {
    getAllProducts()
    .then(data=> {
        res.json(data)
    
})
.catch(err=> {
    console.log(err);
    res.json({msg:err.message})
})
})

app.get('/api/products/:id', (req, res)=> {
    getAllProducts(req.params.id)
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json({msg:err.message})
    })
})

app.post('/api/product', (req,res)=>{
    insertProduct(req.body)
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json({msg:err.message})
    })
})

app.delete('/api/product/:id',(req,res){
    deleteProduct(req.params.id)
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json({msg:err.message})
    })
})