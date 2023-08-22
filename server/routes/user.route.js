const express = require('express');
const userController = require('../controllers/user.controller');
const verifyMailSend = require('../utils/nodemail');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.route('/signup').post(userController.signup, verifyMailSend);
router.route('/login').post(userController.login);

// password reset routes
router.post('/reset-password', userController.resetPassword, verifyMailSend);
router.post('/forget-password/:resetToken', userController.forgetPassword);

router.route('/verify/:verificationToken').get(userController.verifyUser);

router.get('/me', verifyToken, userController.getMe);

module.exports = router;
