const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');
const { orderService } = require('../services/order.service');
const { ObjectId } = require('mongoose').Types;

const tran_id = new ObjectId().toString();

exports.getOrders = async (req, res) => {
	try {
		const userId = req.params.userId;
		const orders = await Order.find({ 'user.id': userId }).select('-user');
		if (orders.length < 1) {
			return res.status(204).json({
				status: 'success',
				message: "You did't place any order",
			});
		}
		console.log(orders);

		return res.status(200).json({
			status: 'success',
			data: orders,
		});
	} catch (error) {}
};

exports.createOrder = async (req, res) => {
	try {
		const order = await orderService(req, tran_id);
		order.paymentMethod = 'cash-on-deliviry';
		const newOrder = await Order.create(order);
		if (!newOrder) {
			return res.status(500).json({
				status: 'fail',
				message: 'Could not create an order',
			});
		}

		return res.status(200).json({
			status: 'success',
			message: 'Successfully order placed',
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: 'fail',
			error,
		});
	}
};
