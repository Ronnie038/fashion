const { signupService, findUserByEmail } = require('../services/user.service');
const { generateToken } = require('../utils/token');
const User = require('../models/User');

exports.signup = async (req, res, next) => {
	try {
		const user = await signupService(req.body);
		req.user = user;

		next();
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			error,
		});
	}
};

/**
 *
 * @param {check email and password are given } req
 * @param {Load user with email} res
 * @param {if not user send res} res
 * @param {compare password} res
 * @param {If password not correct send res} res
 * @param {check if user is verified} res
 * @param {if not verified send res} res
 * @param {send user and token} res
 *
 */

exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password)
			return res.status(401).json({
				status: 'fail',
				error: 'please provide your credential',
			});

		const user = await findUserByEmail(email);
		if (!user) {
			return res.status(401).json({
				status: 'fail',
				error: 'No user found. Please create an account',
			});
		}

		// * checking is password valid or not

		const isPasswordValid = user.comparePassword(password, user.password);

		if (!isPasswordValid) {
			return res.status(401).json({
				status: 'fail',
				error: 'Invalid credential',
			});
		}

		if (!user.verified) {
			return res.status(401).json({
				status: 'fail',
				error: 'please check your mail to active your account',
			});
		}

		const token = generateToken(user);
		const { password: pwd, ...other } = user.toObject();

		res.cookie('jwToken', token, {
			expires: new Date(Date.now() + 604800000),
			// 604800000
			httpOnly: true,
			secure: true,
		});

		res.status(200).json({
			status: 'success',
			message: 'Successfully logged in',
			data: {
				user: other,
				token,
			},
		});
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			error,
		});
	}
};

exports.getMe = async (req, res) => {
	try {
		const user = await findUserByEmail(req.user?.email);

		res.status(200).json({
			status: 'success',
			user: user,
		});
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			error,
		});
	}
};

exports.verifyUser = async (req, res) => {
	const verifyContent = `
    <html>
      <head>
        <title>Verify email</title>
      </head>
      <body>
        <h1 style="text-align:center;color:white; margin:3rem auto 0 auto;background-color:green;width:300px;padding:50px;">Email verified</h1>
		<div className="" style="text-align:center">
		<a href="https://www.google.com" target="_blank" style="text-align:center;color:white; margin:3rem auto 0 auto;background-color:red;padding:20px;text-decoration:none;font-size:20px;font-weight:bold">Go to login</a>
		</div>

        
      </body>
    </html>
  `;
	try {
		const userId = req.params.verificationToken;
		console.log(userId);

		const verifyUser = await User.updateOne(
			{ _id: userId },
			{ verified: true },
			{ new: true }
		);

		console.log(verifyUser);

		res.send(verifyContent);
	} catch (error) {
		res.status(500).send('Something went wrong');
	}
};
