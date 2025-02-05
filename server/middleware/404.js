const handleNotFound = (req, res, next) => {
	res.json({ message: "Sorry, the page you are looking for hasn't been programmed yet." });
};

module.exports = {
	handleNotFound,
};
