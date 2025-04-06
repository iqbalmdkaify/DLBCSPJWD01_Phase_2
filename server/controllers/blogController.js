const { BlogModel } = require("../models/dataModel");

// Fetch all blogs from the database
const getAllBlogs = async (req, res) => {
	try {
		const blogs = await BlogModel.find().lean(); // lean() returns plain JS objects instead of Mongoose documents
		res.status(200).json(blogs);
	} catch (err) {
		res.status(500).json("Unexpected Error");
	}
};

// Create a new blog post
const createBlog = async (req, res) => {
	const { title, content, author } = req.body;
	const image = req.file;

	// Create new blog instance with image data
	const blog = await BlogModel({
		title,
		content,
		author,
		blogImage: {
			filename: image.originalname,
			contentType: image.mimetype,
			data: image.buffer,
		},
	});

	try {
		const savedBlog = await blog.save(); // Save blog to the database
		res.status(201).json({ success: true, _id: savedBlog._id });
	} catch (err) {
		res.status(500).json({ success: false, message: "Error saving the blog form" });
	}
};

// Fetch a single blog by ID
const getSingleBlog = async (req, res) => {
	const blogId = req.params.id;

	try {
		const blog = await BlogModel.findById(blogId).lean(); // Fetch blog using ID
		res.status(200).json(blog);
	} catch (error) {
		res.status(500).json("Unexpected Error");
	}
};

// Delete a blog by ID
const deleteBlog = async (req, res) => {
	const blog_id = req.params.id;

	try {
		const deletedBlog = await BlogModel.findByIdAndDelete(blog_id); // Delete blog by ID

		if (!deletedBlog) {
			return res.status(404).json({ message: "Blog not found" });
		}

		res.status(200).json({ message: "Blog deleted successfully" });
	} catch (error) {
		console.error("Error deleting blog:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = {
	getAllBlogs,
	createBlog,
	getSingleBlog,
	deleteBlog,
};
