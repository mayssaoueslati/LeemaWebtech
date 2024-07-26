const express = require("express");
const multer = require("multer");
const path = require("path");
const Application = require("../Application");

const router = express.Router();

// Multer configuration for job file uploads
const jobStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/job_cvs/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const uploadJob = multer({ storage: jobStorage });

// Route to handle job applications
router.post("/apply", uploadJob.single("cv"), async (req, res) => {
  console.log('Request received:', req.body);

  try {
    const {
      firstName,
      familyName,
      email,
      phone,
      coverLetter,
      position,
      portfolio,
    } = req.body;

    const cv = req.file ? req.file.path : null;
    if (!cv) {
      return res.status(400).json({ message: "CV file is required." });
    }

    const application = new Application({
      firstName,
      familyName,
      email,
      phone,
      coverLetter,
      position,
      cv,
      portfolio,
    });

    await application.save();

    res.status(200).json({ message: "Job application submitted successfully!" });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: "An error occurred", error });
  }
});

module.exports = router;