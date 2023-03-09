const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");

// DotEnv setup
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Controllers
const projectController = require("./controllers/projectControllers");

// Middleware
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

// Routes

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

app.use("/projects", projectController);

mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
});

app.listen(PORT, () => {
  console.log("the server is listening at" + PORT);
});
