const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { errors } = require("celebrate");
const connectDB = require("./config/ConnectToDb");
const cors = require("cors");
const path = require("path");
const logger = require("./config/logger");
require("dotenv").config();

// Initialize App
const app = express();

// Connect To DB
connectDB();

// Middlewares
app.use(express.json());

// CORS Middleware
app.use(cors());
// Helmet Middleware
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: false,
  })
);

// Serve Static Files
app.use(express.static(path.join(__dirname, "public")));

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/users", require("./routes/usersRoute"));
app.use("/api/courses", require("./routes/coursesRoute"));
app.use("/api/instructors", require("./routes/instructorRoute"));
app.use("/api/orders", require("./routes/ordersRoute"));

// Default Route
app.get("*", (req, res) => {
  res.json({ message: "API Working" });
});

// Celebrate error handling
app.use(errors());

// Run Server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`App Listening On Port ${PORT}!`));
