const express = require('express');
const router = express.Router();

const {
  checkout,
  getMyOrders,
  getAllOrders,
  getOrdersForSeller // new import
} = require('../controllers/orderController');

const { verifyToken, verifySeller } = require('../middleware/auth');

router.post('/checkout', verifyToken, checkout);
router.get('/my', verifyToken, getMyOrders);
router.get('/seller/orders', verifyToken, verifySeller, getOrdersForSeller); // <-- updated

module.exports = router;