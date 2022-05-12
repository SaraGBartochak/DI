const {
        getAllProducts,
        getProduct,
        searchProduct,
        insertProduct,
        deleteProduct,
        updateProduct
      } = require('../modules/db-products.js');

// READ - get method - all product
const _getAllProducts = (req,res) =>{
  getAllProducts()
  .then(data=>{
    res.json(data)
  })
  .catch(err=>{
    console.log(err);
    res.json({msg:err.message})
  })
}

//Read - get one product with id
const _getProduct = (req,res)=>{
  getProduct(req.params.id)
  .then(data=>{
    res.json(data)
  })
  .catch(err=>{
    console.log(err);
    res.json({msg:err.message})
  })
}

//READ - search product by name
const _searchProduct = (req,res) => {
  console.log(req.query.q);
  searchProduct(req.query.q)
  .then(data=>{
    res.json(data)
  })
  .catch(err=>{
    console.log(err);
    res.json({msg:err.message})
  })
}

// CREATE - create new product
const _insertProduct = (req,res)=>{
  insertProduct(req.body)
  .then(data=>{
    res.json(data)
  })
  .catch(err=>{
    console.log(err);
    res.json({msg:err.message})
  })
}

// Delete - delete one product
const _deleteProduct = (req,res)=>{
  deleteProduct(req.params.id)
  .then(data=>{
    res.json(data)
  })
  .catch(err=>{
    console.log(err);
    res.json({msg:err.message})
  })
}

// Update - update a product - name, price
const _updateProduct = (req,res)=>{
  updateProduct(req.params.id,req.body)
  .then(data=>{
    res.json(data)
  })
  .catch(err=>{
    console.log(err);
    res.json({msg:err.message})
  })
}

module.exports = {
  _getAllProducts,
  _getProduct,
  _searchProduct,
  _insertProduct,
  _deleteProduct,
  _updateProduct
}
