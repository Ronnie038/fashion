const express = require('express');
const userController = require('../controllers/user.controller');
const verifyMailSend = require('../utils/nodemail');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.route('/signup').post(userController.signup, verifyMailSend);
router.route('/login').get(userController.login);
router.get('/logout', userController.logOut);

// password reset routes
router.post('/reset-password', userController.resetPassword, verifyMailSend);
router.post('/forget-password/:resetToken', userController.forgetPassword);

// user email verification route
router.route('/verify/:verificationToken').get(userController.verifyUser);

router.get('/me', verifyToken, userController.getMe);

module.exports = router;
