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
	console.log(req.body);
	const { title, content, author } = req.body;
	const image = req.file;
	console.log(image);
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
		await blog.save();

		res.status(201).json("Blog created successfully");
	} catch (err) {
		res.status(500).json("Unexpected Error");
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

module.exports = {
	getAllBlogs,
	createBlog,
	getSingleBlog,
};
