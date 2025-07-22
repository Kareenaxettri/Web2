const express = require('express');
const router = express.Router();
const { createProduct } = require('../controllers/productController');
const { verifyToken, requireRole } = require('../middleware/auth');
const { getSellerProducts } = require('../controllers/productController');
const { updateProduct } = require('../controllers/productController');
const { deleteProduct } = require('../controllers/productController');
const { getAllProducts } = require('../controllers/productController');





router.post('/', verifyToken, requireRole('seller'), createProduct);
router.get('/my-products', verifyToken, requireRole('seller'), getSellerProducts);
router.put('/:id', verifyToken, requireRole('seller'), updateProduct);
router.delete('/:id', verifyToken, requireRole('seller'), deleteProduct);
router.get('/', getAllProducts);


module.exports = router;



