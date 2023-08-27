const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/process', paymentController.processPayment);
router.post('/ssl-success/:transId', paymentController.paymentSuccess);
router.post('/ssl-fail', paymentController.paymentFailure);
router.post('/ssl-cancel', paymentController.paymentCancel);
router.post('/ssl-ipn', paymentController.paymentIpn);
// router.post('/ssl-success', async (req, res, next) => {
// 	return res.status(200).json({
// 		status: 'success',
// 		data: req.body,
// 	});
// });
module.exports = router;
