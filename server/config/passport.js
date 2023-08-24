const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: '/api/v1/user/google/callback',
			scope: ['profile', 'email'],
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				let user = await User.findOne({ email: profile.emails[0].value });

				const newUser = {
					userName: profile?.displayName,
					email: profile?.emails[0].value,
					verified: profile?.emails[0].verified,
					imageURL: profile?.photos[0].value,
				};

				if (!user) {
					user = await User.create(newUser);
					// Since Google login is verified
					// ... other relevant data
				}

				return done(null, user);
				// Handle Facebook login and user creation/update
				// ... (similar to the logic in the previous examples)
			} catch (error) {
				console.error('Error in google strategy:', error);
				return done(error, false);
			}
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
