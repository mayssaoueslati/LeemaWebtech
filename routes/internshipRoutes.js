// routes/internshipRoutes.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const InternshipApplication = require("../models/InternshipApplication");

const router = express.Router();

// Multer configuration for internship file uploads
const internshipStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/internship_cvs/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const uploadInternship = multer({ storage: internshipStorage });

// Route to handle internship applications
router.post("/apply", uploadInternship.single("cv"), async (req, res) => {
  console.log('Request received:', req.body);
  console.log('File received:', req.file);

  try {
    const {
      firstName,
      familyName,
      email,
      phone,
      coverLetter,
      internshipType,
    } = req.body;

    const cv = req.file ? req.file.path : null;
    if (!cv) {
      return res.status(400).json({ message: "CV file is required." });
    }

    const internshipApplication = new InternshipApplication({
      firstName,
      familyName,
      email,
      phone,
      coverLetter,
      internshipType,
      cv,
    });

    await internshipApplication.save();

    res.status(200).json({ message: "Internship application submitted successfully!" });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: "An error occurred", error });
  }
});

module.exports = router;
