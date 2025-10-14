// MarcoHotel/backend/routes/rooms.js

import express from 'express';
// import { getRooms, getRoomById } from '../controllers/roomController.js'; 
// Temporarily using inline controller logic with mock data to ensure server stability.

const router = express.Router();

// --- MOCK ROOM DATA ---
// This mock data includes the 'imageUrl' that the frontend needs.
const mockRooms = [
    { 
        _id: '60c72b2f9c1d440000d83b6e', 
        name: 'Ocean View Suite', 
        description: 'Luxury suite with panoramic ocean views and private balcony.', 
        price: 350, 
        maxGuests: 4, 
        imageUrl: 'https://images.unsplash.com/photo-1594917631388-7510d9e5b5e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        amenities: ['Private Balcony', 'Jacuzzi', 'Minibar'] 
    },
    { 
        _id: '60c72b2f9c1d440000d83b6f', 
        name: 'Garden Bungalow', 
        description: 'Secluded bungalow nestled in a lush tropical garden with a private patio.', 
        price: 220, 
        maxGuests: 2, 
        imageUrl: 'https://images.unsplash.com/photo-1579656846937-fd5a8fb3a778?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        amenities: ['Private Patio', 'Hammock'] 
    },
    { 
        _id: '60c72b2f9c1d440000d83b70', 
        name: 'The Penthouse', 
        description: 'Our premier unit. Two-story penthouse with full kitchen and roof access.', 
        price: 600, 
        maxGuests: 6, 
        imageUrl: 'https://images.unsplash.com/photo-1578683010212-3b0d6910a905?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        amenities: ['Full Kitchen', 'Rooftop Deck', 'Private Elevator'] 
    },
];
// --- END MOCK ROOM DATA ---

// @desc    Get all rooms
// @route   GET /api/rooms
// @access  Public (for now)
router.get('/', async (req, res) => {
    try {
        // --- MOCK IMPLEMENTATION ---
        // Respond with the mock data
        res.status(200).json(mockRooms);
        // --- END MOCK IMPLEMENTATION ---
    } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).json({ 
            message: 'Error fetching rooms (Mock failed).', 
            error: error.message 
        });
    }
});

// @desc    Get a single room by ID
// @route   GET /api/rooms/:id
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        // --- MOCK IMPLEMENTATION ---
        const room = mockRooms.find(r => r._id === req.params.id);

        if (!room) {
            return res.status(404).json({ message: 'Room not found in mock data' });
        }

        res.status(200).json(room);
        // --- END MOCK IMPLEMENTATION ---
    } catch (error) {
        console.error("Error fetching single room:", error);
        res.status(400).json({ message: 'Error fetching single room (Mock failed)', error: error.message });
    }
});


// Export the router using ES Module syntax
export default router;