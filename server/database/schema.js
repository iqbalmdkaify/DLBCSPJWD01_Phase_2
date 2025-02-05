const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// User schema
const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		validate: function (email) {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

			return emailRegex.test(email);
		},
	},
	username: {
		type: String,
		required: true,
		unique: true,
		validate: function (username) {
			const usernameRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;

			return usernameRegex.test(username);
		},
	},
	password: {
		type: String,
		required: true,
		minLength: 6,
	},
});

// Blog schema
const blogSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},

		/* TODO: Markdown content features can be added if needed for
			better UI experience

			TODO: Fetch user data if the user is logged in (author)

			DEBUG: Get user(author) data from statically
		*/
		content: {
			type: String,
			required: true,
		},
		// TODO: Decoding and Storing the Image Data in Frontend
		blogImage: [
			{
				contentType: {
					type: String,
					required: true,
				},
				filename: {
					type: String,
					required: true,
				},
				data: {
					type: Buffer,
					required: true,
				},
			},
		],
		likes: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

// hashing the passwords before saving in the db
userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

userSchema.statics.login = async function (email, password) {
	const user = await this.findOne({ email });

	if (user) {
		const pass = await bcrypt.compare(password, user.password);

		if (pass) {
			return user;
		} else {
			throw new Error("Incorrect password");
		}
	} else {
		throw new Error("Invalid email");
	}
};

module.exports = {
	userSchema,
	blogSchema,
};
