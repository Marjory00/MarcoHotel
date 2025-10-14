// MarcoHotel/backend/controllers/reservationController.js

// import Reservation from '../models/Reservation.js'; // TEMPORARILY COMMENTED OUT - DB MOCK

// Mock data storage for the backend until Mongoose is fully integrated
let mockReservations = []; 
let nextReservationId = 1;

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

        // Date validation logic 
        if (new Date(checkOutDate) <= new Date(checkInDate)) {
            return res.status(400).json({ message: 'Check-out date must be after check-in date.' });
        }

        // --- MOCK IMPLEMENTATION ---
        const newReservation = {
            _id: nextReservationId++, // Use an ID for the mock
            fullName,
            email,
            roomType,
            checkInDate: new Date(checkInDate).toISOString().split('T')[0], // Clean date format
            checkOutDate: new Date(checkOutDate).toISOString().split('T')[0],
            numberOfGuests: parseInt(numberOfGuests),
            createdAt: new Date().toISOString(),
        };

        mockReservations.push(newReservation);
        // --- END MOCK IMPLEMENTATION ---

        // const createdReservation = await reservation.save(); // Mongoose line
        res.status(201).json(newReservation);
    } catch (error) {
        // Log the error detail for debugging
        console.error("Error in createReservation:", error); 
        res.status(500).json({ message: 'Server error while creating reservation.' });
    }
};

// @desc    Get all reservations (Management System Scheduling View)
// @route   GET /api/reservations
// @access  Private (Admin/Management only)
export const getReservations = async (req, res) => {
    try {
        // --- MOCK IMPLEMENTATION ---
        // Sort mock data by checkInDate
        const sortedReservations = [...mockReservations].sort((a, b) => 
            new Date(a.checkInDate) - new Date(b.checkInDate)
        );
        res.status(200).json(sortedReservations);
        // --- END MOCK IMPLEMENTATION ---

        // const reservations = await Reservation.find({}).sort({ checkInDate: 1 }); // Mongoose line
        // res.status(200).json(reservations);
    } catch (error) {
        console.error("Error in getReservations:", error);
        res.status(500).json({ message: 'Server error while fetching reservations.' });
    }
};

// You would add more functions here for:
// - getReservationById
// - updateReservationStatus (for management)
// - deleteReservation