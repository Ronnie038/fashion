const Category = require('../models/Category');

exports.createCategoryService = async (data) => {
	const category = await Category.create(data);

	return category;
};
exports.getCategoriesService = async (id) => {
	const categories = await Category.find({});

	return categories;
};
exports.getCategoryServiceById = async (id) => {
	const store = await Category.findById(id);

	return store;
};
// exports.updateStoreService = async (id, data) => {
// 	const result = await Category.updateOne({ _id: id }, data, {
// 		runValidators: true,
// 	});

// 	return result;
// };
