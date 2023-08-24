const express = require('express');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const cookieSession = require('cookie-session');
const passportSetup = require('./config/passport');

const app = express();
const cors = require('cors');

const mongoose = require('mongoose');

// middleweate
// app.use(
// 	cookieSession({
// 		name: 'jwToken',
// 		keys: ['israfil'],
// 		maxAge: 24 * 60 * 60 * 100,
// 	})
// );
app.use(
	session({
		secret: process.env.ACCESS_TOKEN_SECRET,
		resave: true,
		saveUninitialized: true,
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(express.json());
app.use(
	cors({
		origin: 'http://localhost:3000',
		methods: 'GET,POST,PUT,DELETE',
		credentials: true,
	})
);

// routes

const userRoute = require('./routes/user.route');
app.get('/', (req, res) => {
	return res.send('hello from behind');
});

// user route
app.use('/api/v1/user', userRoute);

module.exports = app;
