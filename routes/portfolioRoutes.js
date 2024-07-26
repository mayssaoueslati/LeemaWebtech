const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

// GET all cards
router.get('/', async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cards', error: err.message });
  }
});

// POST a new card (for testing purposes)
router.post('/', async (req, res) => {
  const { imageSrc, title, subtitle, text } = req.body;
  try {
    const newCard = new Card({ imageSrc, title, subtitle, text });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ message: 'Error creating card', error: err.message });
  }
});

module.exports = router;