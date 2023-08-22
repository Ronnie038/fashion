const nodemailer = require('nodemailer');

// Create a transporter using your email service's SMTP settings
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.MAIL_PASSWORD,
	},
});

// Generate a verification token (you might use a library like `crypto` for this)
// const verificationToken = generateVerificationToken(32);

const mailHandler = async (req, res, next) => {
	const verificationToken = req?.user?._id.toString();

	const passwordResetToken = req?.resetToken;

	// Compose the verification link

	const verificationLink = `${process.env.APP_URL}/api/v1/user/${
		verificationToken ? 'verify' : 'forget-password'
	}/${verificationToken || passwordResetToken}`;

	// HTML template for the verification email
	console.log(verificationLink);
	const emailTemplate = `
      <h1>${
				verificationToken ? 'Verify Your Email' : 'Reset your password'
			}</h1>
      <p>Click the link below to verify your email:</p>
      <a href="${verificationLink}">${
		verificationToken ? 'verify your email' : 'password reset link'
	}</a>
    `;

	try {
		// Email options
		const mailOptions = {
			from: process.env.EMAIL,
			to: req.body.email,
			subject: 'Email Verification',
			html: emailTemplate,
		};

		// Send the email
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.error('Error sending email:', error);
				res.status(500).json({
					status: 'fail',
					error,
				});
			} else {
				res.status(200).json({
					status: 'success',
					message: 'A confirmation message has been sent',
				});
			}
		});
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			error,
		});
	}
};

module.exports = mailHandler;
