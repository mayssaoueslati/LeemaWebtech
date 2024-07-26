const mongoose = require('mongoose');

const projectApplicationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  projectType: { type: [String], required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model('ProjectApplication', projectApplicationSchema);
