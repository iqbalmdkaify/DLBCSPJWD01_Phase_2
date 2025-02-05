const jwt = require("jsonwebtoken");

const verifyCallback = (token, fn) => {
	jwt.verify(token, process.env.SECRET, fn);
};

module.exports = {
	verifyCallback,
};
