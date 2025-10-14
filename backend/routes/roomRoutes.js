// server/routes/roomRoutes.js
const express = require('express');
const router = express.Router();
const Room = require('../models/Room'); // Import the Room Model

// @desc    Get all rooms
// @route   GET /api/rooms
// @access  Public (for now)
router.get('/', async (req, res) => {
    try {
        // Find all rooms in the database
        const rooms = await Room.find({});
        
        // Respond with the list of rooms as JSON
        res.status(200).json(rooms);

    } catch (error) {
        // Handle database or server errors
        res.status(500).json({ message: 'Error fetching rooms', error: error.message });
    }
});

// We will add POST, PUT, DELETE routes later...

module.exports = router;