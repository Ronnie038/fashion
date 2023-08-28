const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');

// Route to add an item to the cart
router.post('/add', cartController.addToCart);

// Route to update the quantity of an item in the cart

router
	.route('/:itemId')
	.put(cartController.updateCartItem)
	.delete(cartController.removeFromCart);

// Route to get the contents of the user's cart
router.get('/:userId', cartController.getUserCart);

module.exports = router;
