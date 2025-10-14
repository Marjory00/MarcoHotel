// MarcoHotel/backend/routes/reservationRoutes.js

import express from 'express';
import { createReservation, getReservations } from '../controllers/reservationController.js';

const router = express.Router();

// Public Route: Client creates a new booking
router.post('/', createReservation); 

// Private Route: Management views the schedule
router.get('/', getReservations); // **TODO: Add admin middleware here to protect this route**

export default router;