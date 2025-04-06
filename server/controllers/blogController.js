const { BlogModel } = require("../models/dataModel");

const getAllBlogs = async (req, res) => {
	try {
		const blogs = await BlogModel.find().lean();
		res.status(200).json(blogs);
	} catch (err) {
		res.status(500).json("Unexpected Error");
	}
};

const createBlog = async (req, res) => {
	const { title, content, author } = req.body;
	const image = req.file;
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
		const savedBlog = await blog.save();

		res.status(201).json({ success: true, _id: savedBlog._id });
	} catch (err) {
		res.status(500).json({ success: false, message: "Error saving the blog form" });
	}
};

const getSingleBlog = async (req, res) => {
	const blogId = req.params.id;
	try {
		const blog = await BlogModel.findById(blogId).lean();

		res.status(200).json(blog);
	} catch (error) {
		res.status(500).json("Unexpected Error");
	}
};

const deleteBlog = async (req, res) => {
	const blog_id = req.params.id;

	try {
		const deletedBlog = await BlogModel.findByIdAndDelete(blog_id);

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
