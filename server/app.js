const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const cors = require('cors');

const mongoose = require('mongoose');

// middleweate
app.use(cookieParser());
app.use(express.json());
app.use(cors());

// routes

const userRoute = require('./routes/user.route');
app.get('/', (req, res) => {
	return res.send('hello from behind');
});

// user route
app.use('/api/v1/user', userRoute);

module.exports = app;
