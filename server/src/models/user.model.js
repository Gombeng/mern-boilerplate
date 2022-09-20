const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema(
	{
		username: {
			required: true,
			type: String,
		},
		email: {
			required: true,
			type: String,
		},
		password: {
			required: true,
			type: String,
		},
	},
	{
		timestamps: {
			createdAt: 'createdAt',
			updatedAt: 'updatedAt',
		},
	}
);

UserSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

// will encrypt password everytime its saved
UserSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

module.exports = model('user', UserSchema);
