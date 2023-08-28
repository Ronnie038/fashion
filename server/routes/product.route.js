const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const uploader = require('../middleware/uploader');

router
	.route('/')
	.post(uploader.array('images', 12), productController.createPrduct)
	.get(productController.getProducts);

// router.post('/', uploader.array('images', 12), productController.createPrduct);

router
	.route('/:productId')
	.put(productController.updateProduct)
	.delete(productController.deleteProduct);

module.exports = router;
