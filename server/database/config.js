require("dotenv").config();

const USER_COLLECTION = "User";
const BLOG_COLLECTION = "Blog";
const DB_NAME = "Blogs";

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URI = `mongodb+srv://${username}:${password}@cluster0.pzilqx0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

module.exports = {
	URI,
	USER_COLLECTION,
	BLOG_COLLECTION,
	DB_NAME,
};
