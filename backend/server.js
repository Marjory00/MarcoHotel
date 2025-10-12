// server/server.js
const express = require('express');
const cors = require('cors'); 
const connectDB = require('./config/db'); // Import DB connection
const roomRoutes = require('./routes/roomRoutes'); // Import Room routes

// Execute the database connection function
connectDB(); 

const app = express();
const PORT = 5000; 

// Middleware
app.use(cors()); 
app.use(express.json()); 

// --- API Routes ---
// When a request comes to /api/rooms, use the roomRoutes handler
app.use('/api/rooms', roomRoutes); 

// Basic server test route
app.get('/', (req, res) => {
    res.json({ message: 'MarcoHotel Backend is running!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});