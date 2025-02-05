const customError = (errorMessage, res) => {
	res.json({ serverError: errorMessage });
};

module.exports = {
	customError,
};
