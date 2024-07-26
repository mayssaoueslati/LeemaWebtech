const mongoose = require("mongoose");

const internshipApplicationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  familyName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  coverLetter: { type: String, required: true },
  internshipType: { type: String, required: true },
  cv: { type: String, required: true },
});

const InternshipApplication = mongoose.model("InternshipApplication", internshipApplicationSchema);

module.exports = InternshipApplication;