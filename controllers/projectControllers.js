const express = require("express");
const router = express.Router();

// Mongoose Imports
const mongoose = require("mongoose");
const ProjectModel = require("../models/Project");

// Index
router.get("/", async (req, res) => {
  try {
    const allProjects = await ProjectModel.find({});
    res.json(allProjects);
  } catch (err) {
    console.log(err);
  }
});

// Show
router.get("/:id", async (req, res) => {
  try {
    const foundProject = await ProjectModel.findById(req.params.id);
    res.json(foundProject);
  } catch (err) {
    console.log(err);
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const newProject = await ProjectModel.create(req.body);
    res.json({ newProject });
  } catch (err) {}
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const foundProject = await ProjectModel.findById(req.params.id);
    const currentTeamMates = foundProject.teamMembers;
    if (req.body.newMember) {
      req.body.teamMembers = [...currentTeamMates, req.body.newMember];
    }
    const updatedProject = await ProjectModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProject);
  } catch (err) {
    console.log(err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deletedProject = await ProjectModel.findByIdAndDelete(req.params.id);
    res.json(deletedProject);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
