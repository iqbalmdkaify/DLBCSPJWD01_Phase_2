const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const config = require("./database/config");
const { connectDatabase } = require("./database/db");
const { getCurrentUser } = require("./middleware/authMiddleware");
const { isAuth } = require("./middleware/authMiddleware");

const mainRoutes = require("./routes/mainRoutes");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = process.env.PORT || 5002;

// Importing controllers
const blogControllers = require("./controllers/blogController");
const { handleNotFound } = require("./middleware/404");

// Middlewares
app.use(express.static(__dirname + "/./public"));
app.use(cookieParser());
app.use(
	cors({
		origin: "http://localhost:5173",
		// origin: "http://192.168.0.2:5173",
		credentials: true,
	})
);

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON-encoded bodies
app.use(express.json());

// Middleware to log requests for debugging routes
app.use(morgan("dev"));

// Connecting to the database
connectDatabase(config.URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server running on PORT: ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});

app.get("/api/protected", isAuth, (req, res) => {
	// Access user information via req.user
	res.json({ message: "You are authenticated", user: req.user.username });
});

// Main Routes
app.use(mainRoutes);
app.use(blogRoutes);

// Auth Routes
app.use("/auth", authRoutes);

// Middleware for Page Not Found
app.use(handleNotFound);
