// MarcoHotel/backend/server.js
const express = require('express');
const cors = require('cors'); 
const connectDB = require('./config/db'); // Import DB connection

// ------------------------------------------------------------------
// --- Import Routes ---
// ------------------------------------------------------------------
const roomRoutes = require('./routes/rooms');           // Import Room routes
const reservationRoutes = require('./routes/reservationRoutes'); // FIX: Import the new Reservation routes
const authRoutes = require('./routes/auth');            // Import Authentication routes


// Execute the database connection function
connectDB(); 

const app = express();
const PORT = 5000; 

// Middleware
app.use(cors()); 
app.use(express.json()); 

// ------------------------------------------------------------------
// --- API Routes ---
// ------------------------------------------------------------------

// Room Routes
app.use('/api/rooms', roomRoutes); 

// Reservation Routes (Client bookings and Management schedule)
app.use('/api/reservations', reservationRoutes); 

// Authentication Routes (e.g., /api/auth/register, /api/auth/login)
app.use('/api/auth', authRoutes); 

// Basic server test route
app.get('/', (req, res) => {
    res.json({ message: 'MarcoHotel Backend is running!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});