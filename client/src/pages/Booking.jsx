// client/src/pages/Booking.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

// NOTE: Ensure your backend folder is running on port 5000 (npm run dev from MarcoHotel root)
const API_URL = 'http://localhost:5000/api/rooms/'; 
const BOOKING_API_URL = 'http://localhost:5000/api/bookings/'; // New endpoint

const Booking = () => {
    // 1. Get the room ID from the URL path parameter
    const { roomId } = useParams();
    const navigate = useNavigate();

    // State to hold the room data and form input
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);

    // Function to calculate the number of nights and total price
    const calculatePrice = (checkIn, checkOut, pricePerNight) => {
        // Must have valid dates and a price
        if (!checkIn || !checkOut || !pricePerNight) {
            setTotalPrice(0);
            return;
        }

        // Convert string dates to Date objects
        const dateIn = new Date(checkIn);
        const dateOut = new Date(checkOut);

        // Check if dates are valid and check-out is strictly after check-in
        if (isNaN(dateIn) || isNaN(dateOut) || dateOut <= dateIn) {
            setTotalPrice(0);
            return;
        }

        // Calculate the difference in milliseconds
        const timeDifference = dateOut.getTime() - dateIn.getTime();
        
        // Convert milliseconds to days
        const nights = Math.ceil(timeDifference / (1000 * 3600 * 24));
        
        // Calculate total price
        const calculatedTotal = nights * pricePerNight;
        
        setTotalPrice(calculatedTotal);
    };

    // 2. Fetch the specific room data when the component loads
    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const response = await axios.get(API_URL + roomId);
                setRoom(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching room details:', error);
                setLoading(false);
                // Optionally navigate to a 404 page or rooms list on failure
                // navigate('/rooms'); 
            }
        };
        fetchRoom();
    }, [roomId, navigate]);

    // Effect to recalculate the price whenever dates or room data change
    useEffect(() => {
        if (room) {
            calculatePrice(checkInDate, checkOutDate, room.price);
        }
    }, [checkInDate, checkOutDate, room]);


    // UPDATED: Simple handler for booking submission, now with API POST request
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation check based on the calculated price
        if (totalPrice === 0) {
            alert('Please select valid check-in and check-out dates.');
            return;
        }

        // Prepare Booking Data (matches the backend model/controller expectations)
        const bookingData = {
            room: room._id, // Needs to be 'room' to match Mongoose ObjectId field
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            totalPrice: totalPrice,
            // (Authentication/User ID will be handled in a later step)
        };

        try {
            // Send the POST request to the backend booking route
            const response = await axios.post(BOOKING_API_URL, bookingData);

            // Success Feedback
            alert(`Booking successful! Confirmation ID: ${response.data.data._id}`);
            
            // Redirect to a confirmation or user's dashboard page
            // navigate('/confirmation', { state: { bookingDetails: response.data.data } }); 

        } catch (error) {
            // Error Feedback (e.g., if the backend is down or returns a 400/500)
            console.error('Booking failed:', error.response ? error.response.data : error.message);
            alert(`Booking failed. Error: ${error.response && error.response.data.error ? error.response.data.error : 'Server Error'}`);
        }
    };

    if (loading) {
        return <div className="text-center my-5">Loading room details...</div>;
    }

    if (!room) {
        return <div className="alert alert-danger my-5">Room not found.</div>;
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-8">
                    <h1 className="display-4">{room.name}</h1>
                    <p className="lead text-muted">{room.description}</p>
                    <hr />

                    {/* Room Details Card */}
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <h5 className="card-title text-primary">Room Specifications</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Price:</strong> ${room.price} / night</li>
                                <li className="list-group-item"><strong>Max Guests:</strong> {room.maxGuests}</li>
                                <li className="list-group-item"><strong>Size:</strong> {room.size} sq.ft.</li>
                                <li className="list-group-item">
                                    <strong>Features:</strong> 
                                    {room.features.map((feature, index) => (
                                        <span key={index} className="badge bg-info text-dark ms-2">{feature}</span>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Booking Form (Sticky for better UX) */}
                <div className="col-lg-4">
                    <div className="card shadow-lg sticky-top" style={{ top: '80px' }}>
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">Reserve Your Stay</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="checkInDate" className="form-label">Check-in Date</label>
                                    <input 
                                        type="date" 
                                        id="checkInDate" 
                                        className="form-control" 
                                        value={checkInDate}
                                        onChange={(e) => setCheckInDate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="checkOutDate" className="form-label">Check-out Date</label>
                                    <input 
                                        type="date" 
                                        id="checkOutDate" 
                                        className="form-control" 
                                        value={checkOutDate}
                                        onChange={(e) => setCheckOutDate(e.target.value)}
                                        required
                                    />
                                </div>
                                
                                {/* Display calculated price */}
                                <div className="alert alert-warning text-center fw-bold">
                                    Total Price: ${totalPrice.toFixed(2)}
                                </div>
                                
                                {/* Disable button if price is 0 (invalid dates) */}
                                <button type="submit" className="btn btn-success w-100" disabled={totalPrice === 0}>
                                    Confirm Reservation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;