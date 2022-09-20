const asyncHandler = require('express-async-handler');
const UserModel = require('../models/user.model');

const getAll = asyncHandler(async (req, res, next) => {
	await UserModel.find()
		.then((user) => res.status(200).json(user))
		.catch((error) => next(error));
});

const getOne = asyncHandler(async (req, res, next) => {
	const { id } = req.params;

	await UserModel.findById(id)
		.then((user) => res.status(200).json(user))
		.catch((error) => next(error));
});

const create = asyncHandler(async (req, res, next) => {
	const { username, email, password } = req.body;

	//  * use req.file for handling image
	// const image = req.file.path;

	const data = new UserModel({ username, email, password });

	await data
		.save()
		.then((user) => res.status(200).json({ user: user }))
		.catch((error) => next(error));
});

const update = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	const updatedData = req.body;
	const options = { new: true };

	await UserModel.findByIdAndUpdate(id, updatedData, options)
		.then((user) => res.status(200).json(user))
		.catch((error) => next(error));
});

const remove = asyncHandler(async (req, res, next) => {
	const { id } = req.params;

	await UserModel.findByIdAndDelete(id)

		.then(({ username }) =>
			res.status(200).json({
				message: `"${username}" has been removed..`,
			})
		)
		.catch((error) => next(error));
});

module.exports = { getAll, getOne, create, update, remove };
