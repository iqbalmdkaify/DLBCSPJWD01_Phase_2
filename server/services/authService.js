const jwt = require("jsonwebtoken");

/* jwt sign options method is currently creating and using session based jwt */
const createToken = (userId) => {
	return jwt.sign({ userId }, process.env.SECRET);
};

module.exports = {
	createToken,
};
