// MarcoHotel/backend/models/Reservation.js

import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    roomType: {
        type: String,
        required: true,
        enum: ['ocean_view', 'garden_view', 'deluxe'], // Match options from the frontend
    },
    checkInDate: {
        type: Date,
        required: true,
    },
    checkOutDate: {
        type: Date,
        required: true,
    },
    numberOfGuests: {
        type: Number,
        required: true,
        min: 1,
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
        enum: ['Pending', 'Confirmed', 'Cancelled', 'Checked-In'],
    },
    // Optional: Reference to a User if you implement user authentication later
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    // },
    
}, { timestamps: true });

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;