const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  teamMembers: [String],
  complete: { type: Boolean, default: false },
});

const ProjectModel = mongoose.model("Project", projectSchema);

module.exports = ProjectModel;
