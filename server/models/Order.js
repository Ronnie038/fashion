const mongoose = require('mongoose');

const validator = require('validator');
const { ObjectId, Mixed } = mongoose.Schema.Types;

const OrderSchema = mongoose.Schema(
	{
		user: {
			id: {
				type: ObjectId,
				ref: 'User',
			},
			name: String,
		},
		transactionId: {
			type: String,
			required: true,
		},
		product: {
			id: ObjectId,
			name: String,
		},

		quantity: {
			type: String,
			required: [true, 'please provide quantity'],
		},
		price: {
			type: Number,
			required: [true, 'Please provide a price for this product.'],
		},
		contactNumber: {
			type: Number,
		},
		paymentStatus: {
			type: Boolean,
			enum: [true, false],
			default: false,
		},
		paymentMethod: {
			type: String,
		},
		area: {
			type: String,
		},
		city: {
			type: String,
		},

		image: {
			type: String,
			// required: [true, 'Please provide the img urls'],
		},
		address: {
			type: String,
		},

		productCategory: {
			type: String,
			// required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
