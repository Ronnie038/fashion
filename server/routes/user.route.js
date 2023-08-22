const express = require('express');
const userController = require('../controllers/user.controller');
const verifyMail = require('../middleware/nodemail');

const router = express.Router();

router.route('/signup').post(userController.signup, verifyMail);


router.route('/verify/:verificationToken').get(userController.verifyUser);

module.exports = router;
