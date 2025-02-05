const { UserModel } = require("../models/dataModel");
const { verifyCallback } = require("../utils/verify");

const isAuth = (req, res, next) => {
	const token = req.cookies.jwt;

	if (token) {
		verifyCallback(token, async (err, decodedToken) => {
			if (err) {
				// If the token is invalid, set 'isAuth' to false and respond with 401 status
				res.set("isAuth", false);
				return res.status(401).json({ message: "Not logged in" });
			} else {
				try {
					// Find the user based on the decoded token
					const user = await UserModel.findById(decodedToken.userId);

					if (!user) {
						// If no user is found, set 'isAuth' to false and respond with 401 status
						res.set("isAuth", false);
						return res.status(401).json({ message: "User not found" });
					}

					// Set 'isAuth' to true, add the user info to the request, and proceed to the next middleware
					res.set("isAuth", true);
					req.user = user; // Attach user details to the request
					next();
				} catch (error) {
					// Handle any potential errors during user fetching
					console.error("Error fetching user:", error);
					res.set("isAuth", false);
					return res.status(500).json({ message: "Server error" });
				}
			}
		});
	} else {
		// If there's no token, set 'isAuth' to false and respond with 401 status
		res.set("isAuth", false);
		return res.status(401).json({ message: "Not logged in" });
	}
};

module.exports = {
	isAuth,
	// getCurrentUser,
};
