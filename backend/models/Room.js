// server/models/Room.js
const mongoose = require('mongoose');

// Define the schema (structure) for a single room
const roomSchema = mongoose.Schema(
    {
        // Name of the room type (e.g., 'Standard King', 'Deluxe Double')
        name: {
            type: String,
            required: [true, 'Please add a room name'],
            unique: true, // Room names should be unique
        },
        // A brief description of the room
        description: {
            type: String,
            required: true,
        },
        // The price per night
        price: {
            type: Number,
            required: true,
        },
        // Maximum number of guests allowed
        maxGuests: {
            type: Number,
            required: true,
        },
        // Size of the room in square feet/meters
        size: {
            type: Number,
        },
        // URL for the main image of the room
        imageUrl: {
            type: String,
            default: '/images/default-room.jpg',
        },
        // Array of features (e.g., 'Free WiFi', 'Balcony', 'Minibar')
        features: [
            {
                type: String,
            }
        ],
    },
    // Timestamps automatically add 'createdAt' and 'updatedAt' fields
    {
        timestamps: true,
    }
);

// Export the model, which will create a collection named 'rooms' in MongoDB
const Room = mongoose.model('Room', roomSchema);

module.exports = Room;