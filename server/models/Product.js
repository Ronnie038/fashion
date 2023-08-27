const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

// schema design

const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please provide a name for this product.'],
			trim: true,
			lowercase: true,
			minlength: [3, 'Name must be at least 3 characters.'],
			maxlength: [100, 'Name must be less than 100 characters.'],
		},
		description: {
			type: String,
			required: [true, 'Please provide a description for this product.'],
		},
		price: {
			type: Number,
			required: [true, 'Please provide a price for this product.'],
		},

		status: {
			type: String,
			enum: ['in-stock', 'out-of-stock'],
			default: 'in-stock',
		},
		colors: [
			{
				type: String,
			},
		],
		size: [
			{
				type: String,
				enum: {
					values: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
				},
				message: "size can't be {VALUE}",
			},
		],
		imageURLs: [
			{
				type: String,
				required: [true, 'Please provide the img urls'],

				validate: {
					validator: (value) => {
						let isValid = true;
						if (!validator.isURL(value)) {
							isValid = false;
						}

						return isValid;
					},
					message: 'Please provide valid urls',
				},
			},
		],
		category: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
// const productSchema = mongoose.Schema(
// 	{
// 		name: {
// 			type: String,
// 			required: [true, 'Please provide a name for this product.'],
// 			trim: true,
// 			unique: true,
// 			minlength: [3, 'Name must be at least 3 characters.'],
// 			maxlength: [100, 'Name must be less than 100 characters.'],
// 		},
// 		description: {
// 			type: String,
// 			required: [true, 'Please provide a description for this product.'],
// 		},
// 		price: {
// 			type: Number,
// 			required: [true, 'Please provide a price for this product.'],
// 			min: [0, "Price can't be negative."],
// 		},
// 		unit: {
// 			type: String,
// 			required: [true, 'Please provide a unit for this product.'],
// 			enum: {
// 				values: ['kg', 'litre', 'pcs'],
// 				message: "Unit value can't be {VALUE}, must be kg/litre/pcs.",
// 			},
// 		},
// 		quantity: {
// 			type: Number,
// 			required: [true, 'Please provide a quantity for this product.'],
// 			min: [0, "Quantity can't be negative."],
// 			validate: {
// 				validator: (value) => {
// 					const isInteger = Number.isInteger(value);
// 					if (isInteger) {
// 						return true;
// 					} else {
// 						return false;
// 					}
// 				},
// 				message: 'Quantity must be an integer.',
// 			},
// 		},
// 		status: {
// 			type: String,
// 			required: [true, 'Please provide a status for this product.'],
// 			enum: {
// 				values: ['in-stock', 'out-of-stock', 'discontinued'],
// 				message: "Status value can't be {VALUE}.",
// 			},
// 		},
// 		// createdAt: {
// 		// 	type: Date,
// 		// 	default: Date.now(),
// 		// },
// 		// updatedAt: {
// 		// 	type: Date,
// 		// 	default: Date.now(),
// 		// },
// 		// supplier: {
// 		// 	type: mongoose.Schema.Types.ObjectId,
// 		// 	ref: 'Supplier',
// 		// },
// 		// categories: [
// 		// 	{
// 		// 		name: {
// 		// 			type: String,
// 		// 			required: true,
// 		// 		},
// 		// 		_id: mongoose.Schema.Types.ObjectId,
// 		// 	},
// 		// ],
// 	},
// 	{
// 		timestamps: true,
// 	}
// );

// mongoose middleweares for saving data:pre / post
// productSchema.pre('save', function (next) {
// 	console.log('before saving data');
// 	if (this.quantity == 0) {
// 		this.status = 'out-of-stock';
// 	}
// 	next();
// });

// productSchema.post('save', function (doc, next) {
// 	console.log('After saving data', doc);
// 	next();
// });

//| creating instance on prodcut
// productSchema.methods.logger = function () {
// 	console.log(`Data saved for ${this.name}`);
// };

// SCHEMA --> MODEL----> query
const Product = mongoose.model('Products', productSchema);

module.exports = Product;
