const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");

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

mongoose.connect("mongodb://localhost:27017/tagteam");
mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
});

app.listen(3000, () => {
  console.log("the server is listening at PORT:3000");
});
