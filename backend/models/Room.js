// MarcoHotel/backend/routes/rooms.js

const express = require('express');
const router = express.Router();

// --------------------------------------------------------
// --- MOCK ROOM DATA (IN-MEMORY DATABASE REPLACEMENT) ---
// --------------------------------------------------------
const mockRooms = [
    { 
        id: 1, 
        name: "Luxury Ocean Suite", 
        description: "Expansive suite with panoramic ocean views and private balcony access.", 
        imageUrl: "https://source.unsplash.com/random/600x400/?tropical,hotel,ocean", 
        price: 399.00, 
        maxGuests: 2, 
        amenities: ["Ocean View", "King Bed", "Jacuzzi"] 
    },
    { 
        id: 2, 
        name: "Deluxe Family Villa", 
        description: "Two-bedroom villa with a private plunge pool, perfect for a family retreat.", 
        imageUrl: "https://source.unsplash.com/random/600x400/?pool,villa,bedroom", 
        price: 549.00, 
        maxGuests: 4, 
        amenities: ["Private Pool", "Kitchenette", "Two Bedrooms"] 
    },
    { 
        id: 3, 
        name: "Standard Garden View", 
        description: "Cozy and comfortable room overlooking the lush tropical gardens.", 
        imageUrl: "https://source.unsplash.com/random/600x400/?garden,resort,room", 
        price: 199.00, 
        maxGuests: 2, 
        amenities: ["Garden View", "Queen Bed", "Free WiFi"] 
    },
    { 
        id: 4, 
        name: "Premium King Room", 
        description: "Top-floor room with vaulted ceilings and premium concierge service.", 
        imageUrl: "https://source.unsplash.com/random/600x400/?luxury,king,room", 
        price: 299.00, 
        maxGuests: 2, 
        amenities: ["King Bed", "Premium Service", "Minibar"] 
    }
];
// --------------------------------------------------------


// @desc    Get all rooms
// @route   GET /api/rooms
// @access  Public
router.get('/', (req, res) => {
    console.log('Request received for /api/rooms (using mock data)');
    // Simulate network delay before sending mock data
    setTimeout(() => {
        res.status(200).json(mockRooms);
    }, 500);
});

// @desc    Get a single room by ID
// @route   GET /api/rooms/:id
// @access  Public
router.get('/:id', (req, res) => {
    const roomId = parseInt(req.params.id);
    const room = mockRooms.find(r => r.id === roomId);

    if (room) {
        res.status(200).json(room);
    } else {
        res.status(404).json({ message: 'Room not found' });
    }
});


// We will add POST, PUT, DELETE routes later...

module.exports = router;