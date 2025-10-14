// MarcoHotel/backend/config/db.js 💡

const mongoose = require('mongoose');

// Use this for a local connection (Standard MongoDB port/database name)
const mongoURI = 'mongodb://localhost:27017/MarcoHotelDB'; 

const connectDB = async () => {
    try {
        // Mongoose 6+ automatically handles:
        // - useNewUrlParser: true
        // - useUnifiedTopology: true
        
        // We only pass the connection string and any necessary options like timeout
        const conn = await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        // Log the error and exit the process if connection fails
        console.error(`Error connecting to MongoDB: ${error.message}`);
        // Exit process with failure code
        process.exit(1); 
    }
};

module.exports = connectDB;