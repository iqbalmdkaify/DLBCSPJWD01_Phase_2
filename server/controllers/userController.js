const handleContactForms = (req, res) => {
	const formData = req.body;

	// TODO: mailto:admin@email.com for the form data
	console.log(formData);
	res.status(200).end();
};

module.exports = {
	handleContactForms,
};
