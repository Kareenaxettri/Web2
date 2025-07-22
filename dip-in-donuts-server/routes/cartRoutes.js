const express = require('express');
const router = express.Router();
const {
  addToCart,
  getCartItems,
  updateCartItem,
  removeCartItem,
} = require('../controllers/cartController');
const { verifyToken, requireRole } = require('../middleware/auth');

// All cart routes require buyer role
router.use(verifyToken, requireRole('buyer'));

router.post('/', addToCart);            // Add to cart
router.get('/', getCartItems);          // View cart
router.put('/:id', updateCartItem);     // Update quantity
router.delete('/:id', removeCartItem);  // Remove item

module.exports = router;