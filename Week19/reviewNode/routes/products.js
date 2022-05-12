const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    getProduct,
    searchProduct,
    insertProduct,
    deleteProduct,
    updateProduct
} = require('/modules/db-prducts.js');

router.get('/api/products', getAllProducts);
router.get('/api/product/:id', get);
router.get('/', getAllProducts);
router.get('/', insertProduct);
router.get('/:id', _deleteProduct);
router.get('/:id', _updateProduct);

module.exports = router