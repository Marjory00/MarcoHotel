// server/config/db.js
const mongoose = require('mongoose');


// Use this for a local connection
const mongoURI = 'mongodb://localhost:27017/MarcoHotelDB'; 


// IMPORTANT: Replace this placeholder with your actual MongoDB connection string.
// If running locally, it's typically 'mongodb://localhost:27017/MarcoHotelDB'
// const mongoURI = 'YOUR_MONGODB_CONNECTION_STRING_HERE'; 

const connectDB = async () => {
    try {
        // Adding connection options to increase the server selection timeout to 30 seconds
        const conn = await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        // Log the error and exit the process if connection fails
        console.error(`Error: ${error.message}`);
        process.exit(1); 
    }
};

module.exports = connectDB;