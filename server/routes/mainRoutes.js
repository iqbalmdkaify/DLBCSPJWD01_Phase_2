const express = require("express");
const { getAllBlogs, getSingleBlog } = require("../controllers/blogController");
const { handleContactForms } = require("../controllers/userController");
const { isAuth } = require("../middleware/authMiddleware");

const mainRoutes = express.Router();

// REACT
mainRoutes.post("/contact", handleContactForms);
mainRoutes.get("/blogs", getAllBlogs);
mainRoutes.get("/blogs/:id", isAuth, getSingleBlog);

module.exports = mainRoutes;
