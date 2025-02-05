const mongoose = require("mongoose");

const connectDatabase = async (uri) => {
	const clientOptions = { serverApi: { version: "1", strict: true, deprecationErrors: true } };

	try {
		await mongoose.connect(uri, clientOptions, { useNewUrlParser: true, useUnifiedTopology: true });
		await mongoose.connection.db.admin().command({ ping: 1 });
		console.log("Pinged your deployment. You successfully connected to MongoDB!");
	} catch (err) {
		console.log(err);
	}
};

module.exports = { connectDatabase };
