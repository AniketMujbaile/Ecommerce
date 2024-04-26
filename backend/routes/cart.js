const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const cartController = require('../controllers/cartController');

// Get all cart items for the logged-in user
router.get('/', auth, cartController.getCartItems);

// Add a new item to the cart
router.post('/', auth, cartController.addToCart);

// Update the quantity of a cart item
router.put('/:id', auth, cartController.updateCartItemQuantity);

// Remove a cart item
router.delete('/:id', auth, cartController.removeCartItem);

module.exports = router;
 