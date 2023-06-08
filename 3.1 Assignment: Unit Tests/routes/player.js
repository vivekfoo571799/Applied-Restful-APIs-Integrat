const express = require('express');
const router = express.Router();

const players = require('../models/player');

// GET all player
router.get('/', async (req, res) => {
    try {
        const player = await players.find();
        res.json(player);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// add a new player
router.post('/', async (req, res) => {
    const newplayer = new players({ name: req.body.name });

    try {
        const savedplayer = await newplayer.save();
        res.status(201).json(savedplayer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
