const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  familyName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  coverLetter: { type: String, required: true },
  position: { type: String, required: true },
  cv: { type: String, required: true },
  portfolio: { type: String },
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;