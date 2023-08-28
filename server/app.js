const express = require('express');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
// const cookieSession = require('cookie-session');
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
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(
	session({
		name: 'login-session',
		secret: process.env.ACCESS_TOKEN_SECRET,
		resave: true,
		saveUninitialized: true,
		cookie: {
			maxAge: 604800000,
		},
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
const paymentRoute = require('./routes/payment.route');
const orderRoute = require('./routes/order.route');
const productRoute = require('./routes/product.route');
const cartRoutes = require('./routes/cart.route');

// root route
app.get('/', (req, res) => {
	return res.send('hello from behind');
});

//
app.use('/api/v1/user', userRoute);
app.use('/api/v1/payment', paymentRoute);
app.use('/api/v1/order', orderRoute);
app.use('/api/v1/products', productRoute);
app.use('/api/v1/cart', cartRoutes);

module.exports = app;
