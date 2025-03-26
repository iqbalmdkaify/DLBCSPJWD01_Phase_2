const express = require("express");
const multer = require("multer");

const { createBlog } = require("../controllers/blogController");
const { isAuth } = require("../middleware/authMiddleware");

// Multer temporary file storage
const storage = multer.memoryStorage(); // Buffer storage
const upload = multer({ storage: storage });

const blogRoutes = express.Router();

blogRoutes.post("/create-blog", upload.single("blogImage"), isAuth, createBlog);

module.exports = blogRoutes;
