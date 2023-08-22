const { signupService } = require('../services/user.service');
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

		const verifyUser = await User.updateOne(
			{ _id: userId },
			{ verified: true },
			// If `new` isn't true, `findOneAndUpdate()` will return the
			// document as it was _before_ it was updated.
			{ new: true }
		);

		res.send(verifyContent);
	} catch (error) {
		res.status(500).send('Something went wrong');
	}
};
