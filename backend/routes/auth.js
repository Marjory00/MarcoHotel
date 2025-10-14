// MarcoHotel/backend/routes/auth.js

import express from 'express';
// Ensure we import all necessary controller functions from authController.js
// We are expecting 'register' and 'login' (which I included in the last controller update)
import { register, login } from '../controllers/authController.js'; // <-- Added .js extension & ES import syntax

const router = express.Router();

// Route for user registration: POST /api/auth/register
router.post('/register', register); 

// Route for user login: POST /api/auth/login
router.post('/login', login); // <-- Added the login route

// Export the router using ES Module syntax
export default router;