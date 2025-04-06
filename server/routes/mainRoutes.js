const express = require("express");
const { getAllBlogs, getSingleBlog } = require("../controllers/blogController");
const { isAuth } = require("../middleware/authMiddleware");

const mainRoutes = express.Router();

// Frontend
mainRoutes.get("/blogs", getAllBlogs);
mainRoutes.get("/blogs/:id", isAuth, getSingleBlog);

module.exports = mainRoutes;
