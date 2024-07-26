const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  imageSrc: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  text: { type: String, required: true }
});

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;