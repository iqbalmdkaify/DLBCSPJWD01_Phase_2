const mongoose = require("mongoose");

const { userSchema, blogSchema } = require("../database/schema");

const UserModel = mongoose.model("User", userSchema);
const BlogModel = mongoose.model("Blog", blogSchema);

module.exports = {
	UserModel,
	BlogModel,
};
