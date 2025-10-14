
// MarcoHotel/backend/controllers/reservationController.js

import Reservation from '../models/Reservation.js';

// @desc    Create a new reservation
// @route   POST /api/reservations
// @access  Public
export const createReservation = async (req, res) => {
    try {
        const { fullName, email, roomType, checkInDate, checkOutDate, numberOfGuests } = req.body;

        // Basic validation
        if (!fullName || !email || !roomType || !checkInDate || !checkOutDate || !numberOfGuests) {
            return res.status(400).json({ message: 'Please fill in all required fields.' });
        }

        // Date validation logic (e.g., check-out must be after check-in, dates must be in the future)
        if (new Date(checkOutDate) <= new Date(checkInDate)) {
             return res.status(400).json({ message: 'Check-out date must be after check-in date.' });
        }

        // NOTE: A more complex system would check for room availability here.
        
        const reservation = new Reservation({
            fullName,
            email,
            roomType,
            checkInDate,
            checkOutDate,
            numberOfGuests,
        });

        const createdReservation = await reservation.save();
        res.status(201).json(createdReservation);
    } catch (error) {
        res.status(500).json({ message: 'Server error while creating reservation.' });
    }
};

// @desc    Get all reservations (Management System Scheduling View)
// @route   GET /api/reservations
// @access  Private (Admin/Management only)
export const getReservations = async (req, res) => {
    try {
        // Find all reservations and sort by check-in date
        const reservations = await Reservation.find({}).sort({ checkInDate: 1 }); 
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Server error while fetching reservations.' });
    }
};

// You would add more functions here for:
// - getReservationById
// - updateReservationStatus (for management)
// - deleteReservation