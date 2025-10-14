// MarcoHotel/backend/server.js

import express from 'express';
import cors from 'cors'; 
// import connectDB from './config/db.js'; // <-- TEMPORARILY COMMENTED OUT

// ------------------------------------------------------------------
// --- Import Routes (MUST use .js extension with ES Modules) ---
// ------------------------------------------------------------------
import roomRoutes from './routes/rooms.js'; // Import Room routes
import reservationRoutes from './routes/reservationRoutes.js'; // Import the new Reservation routes
import authRoutes from './routes/auth.js'; // Import Authentication routes


// Execute the database connection function
// connectDB(); // <-- TEMPORARILY COMMENTED OUT as we are using mock data

const app = express();
const PORT = 5000; 

// Middleware
app.use(cors()); 
app.use(express.json()); 

// ------------------------------------------------------------------
// --- API Routes ---
// ------------------------------------------------------------------

// Room Routes (Uses mock data from ./routes/rooms.js)
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