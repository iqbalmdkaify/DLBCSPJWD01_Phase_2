const { UserModel } = require("../models/dataModel");
const { createToken } = require("../services/authService");

const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await UserModel.login(email, password);

		// signing the user with jwt by user_id and sending it back as cookie
		const token = createToken(user._id);
		res.cookie("jwt", token, { httpOnly: true });

		res.status(200).json("Login Successfull");
	} catch (err) {
		console.log(err);
		res.status(401).json("Incorrect credentials");
	}
};

const register = async (req, res) => {
	const registerData = req.body;

	try {
		const register = await UserModel.create(registerData);

		// signing the user with jwt by user_id and sending it back as cookie
		const token = createToken(register._id);
		res.cookie("jwt", token, { httpOnly: true });

		res.status(201).json("Created");
	} catch (err) {
		res.status(390).json("Invalid form fields");
	}
};

const logout = (req, res) => {
	res.cookie("jwt", "", { maxAge: 1 });
	res.status(200).json("Logout successful");
};

module.exports = {
	login,
	register,
	logout,
};
