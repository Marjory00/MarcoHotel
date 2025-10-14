// backend/seed.js
const mongoose = require('mongoose');
const Room = require('./models/Room');
const connectDB = require('./config/db');

// IMPORTANT: Ensure your connection string in ./config/db is correct before running!
connectDB(); // Connect to MongoDB

const sampleRooms = [
    {
        name: 'Standard King',
        description: 'A cozy room with a king-sized bed, perfect for short stays.',
        price: 150,
        maxGuests: 2,
        size: 300,
        imageUrl: '/images/room-king.jpg',
        features: ['Free WiFi', 'Flat-screen TV'],
    },
    {
        name: 'Deluxe Double',
        description: 'Spacious room featuring two comfortable double beds and a city view.',
        price: 220,
        maxGuests: 4,
        size: 450,
        imageUrl: '/images/room-double.jpg',
        features: ['Balcony', 'Minibar', 'Free WiFi'],
    },
    {
        name: 'Executive Suite',
        description: 'Our premium offering: separate living area, large bathroom, and ocean views.',
        price: 450,
        maxGuests: 3,
        size: 700,
        imageUrl: '/images/room-suite.jpg',
        features: ['Separate living room', 'Jacuzzi bath', 'Complimentary breakfast'],
    },
];

const importData = async () => {
    try {
        // Clear out existing data to ensure a fresh start
        await Room.deleteMany(); 
        
        // Insert the new sample data
        await Room.insertMany(sampleRooms);

        console.log('✅ Data Successfully Imported!');
        process.exit();

    } catch (error) {
        console.error(`❌ Error with data import: ${error.message}`);
        process.exit(1);
    }
};

// Run the function to import data
importData();