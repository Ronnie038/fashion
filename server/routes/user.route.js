const express = require('express');
const userController = require('../controllers/user.controller');
const verifyMailSend = require('../utils/nodemail');
const verifyToken = require('../middleware/verifyToken');
const passport = require('passport');
// const authController = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(userController.signup, verifyMailSend);
router.route('/login').get(userController.login);
router.get('/logout', userController.logOut);

// facebook login routes
router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', userController.facebookCallback);

router.get('/login/success', (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: 'Successfully Loged In',
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: 'Not Authorized' });
	}
});
router.get('/login/failed', (req, res) => {
	res.status(401).json({
		status: 'fail',
		message: 'failure',
	});
});
// google login routes
router.get(
	'/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get(
	'/google/callback',
	passport.authenticate('google', {
		successRedirect: 'http://localhost:3000/login',
		failureRedirect: '/api/v1/user/login/failed',
	})
);

// password reset routes
router.post('/reset-password', userController.resetPassword, verifyMailSend);
router.post('/forget-password/:resetToken', userController.forgetPassword);

// user email verification route
router.route('/verify/:verificationToken').get(userController.verifyUser);

router.get('/profile', verifyToken, userController.getMe);
// router.get(
// 	'/profile',
// 	passport.authenticate('jwt', { session: false }),
// 	userController.getMe
// ); // get current logged in user profile info (for testing)

module.exports = router;
