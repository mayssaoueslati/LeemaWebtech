const express = require("express");
const ProjectApplication = require("../models/ProjectApplication");
const router = express.Router();

router.post("/apply", async (req, res) => {
  console.log('Request received:', req.body);

  try {
    const {
      firstName,
      name,
      email,
      phone,
      company,
      projectType,
      message,
    } = req.body;

    const projectApplication = new ProjectApplication({
      firstName,
      name,
      email,
      phone,
      company,
      projectType,
      message,
    });

    await projectApplication.save();

    res.status(200).json({ message: "Project application submitted successfully!" });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: "An error occurred", error });
  }
});

module.exports = router;
