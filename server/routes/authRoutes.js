const express = require("express");
const { login, logout, register } = require("../controllers/authController");

const authRoutes = express.Router();

/* TODO: Check res.user header in the frontend for optimization and for restricting users
  to access auth routes unnecessarily
*/
authRoutes.post("/login", login);

authRoutes.post("/register", register);

authRoutes.get("/logout", logout);

module.exports = authRoutes;
