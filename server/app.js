const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// middleweate
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
