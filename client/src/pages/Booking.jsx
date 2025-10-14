import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BiGroup, BiExpandAlt, BiCalendarCheck, BiCreditCard, BiCheckCircle } from 'react-icons/bi';

// --- MOCK DATA FALLBACK (Must match data structure in Rooms.jsx) ---
const MOCK_ROOMS = [
    {
        _id: 'R101',
        name: 'Ocean View Studio',
        price: 250,
        maxGuests: 2,
        size: 350,
        imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?fit=crop&w=600&h=400',
        description: 'A cozy studio with breathtaking views of the ocean. Perfect for couples.',
        features: ['Balcony', 'King Bed', 'Free Wi-Fi', 'Coffee Maker', 'Smart TV'],
    },
    {
        _id: 'R205',
        name: 'Deluxe Suite w/ Patio',
        price: 450,
        maxGuests: 4,
        size: 700,
        imageUrl: 'https://images.unsplash.com/photo-1541489445903-0c4d7b1a64f3?fit=crop&w=600&h=400',
        description: 'Spacious suite featuring a private furnished patio and two queen beds.',
        features: ['Private Patio', 'Mini-Bar', 'A/C', 'Sofa Bed', 'Desk'],
    },
    {
        _id: 'R302',
        name: 'The Grand Villa',
        price: 990,
        maxGuests: 8,
        size: 1500,
        imageUrl: 'https://images.unsplash.com/photo-1505691938895-1ce6cf85e7a9?fit=crop&w=600&h=400',
        description: 'The ultimate luxury experience with multiple rooms, private plunge pool, and butler service.',
        features: ['Private Pool', 'Butler Service', 'Beach Access', 'Full Kitchen', 'Multiple Bathrooms'],
    },
];
// -------------------------------------------------------------------


const Booking = () => {
    // Get the room ID from the URL path, as defined in App.jsx route
    const { roomId } = useParams(); 
    
    // State for form inputs
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState(1);
    const [loading, setLoading] = useState(true);

    // Find the room using the ID from the mock data (placeholder for API call)
    const room = MOCK_ROOMS.find(r => r._id === roomId);

    useEffect(() => {
        // In a real app, you'd fetch the room data here using axios.get('/api/rooms/' + roomId)
        // We simulate loading to find the room from mock data.
        if (room) {
            setLoading(false);
        } else {
            // Simulate 404/not found state
            setLoading(false);
        }
    }, [roomId, room]);


    // --- Price Calculation Mock ---
    const calculateTotal = () => {
        // Simple mock calculation: assumes 3 nights for presentation
        const pricePerNight = room ? room.price : 0;
        const nights = 3; // Placeholder for date difference calculation
        const subtotal = pricePerNight * nights;
        const tax = subtotal * 0.10; // 10% mock tax
        return { subtotal, tax, total: subtotal + tax, nights };
    };

    const { subtotal, tax, total, nights } = calculateTotal();
    // -----------------------------


    const handleBooking = (e) => {
        e.preventDefault();
        // Placeholder for sending booking data to backend
        alert(`Booking requested for ${room.name} (${nights} nights) at $${total.toFixed(2)}.`);
        console.log({ checkInDate, checkOutDate, guests, total });
    };

    if (loading) {
        return <div className="text-center py-5">Loading room details...</div>;
    }

    if (!room) {
        return <div className="text-center py-5"><h1 className="display-5">Room Not Found 😔</h1><p className="lead">The requested room ID ({roomId}) does not exist.</p><Link to="/rooms" className="btn btn-primary mt-3">Browse All Rooms</Link></div>;
    }


    return (
        <div className="py-5">
            <h1 className="display-4 mb-4 text-tropical-dark text-center">Finalize Your Stay</h1>
            <p className="lead text-center text-muted mb-5">Booking: **{room.name}**</p>
            
            <div className="row">
                
                {/* 1. ROOM DETAILS & FEATURES (Left Column) */}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow-lg tropical-card p-0 h-100">
                        <img 
                            src={room.imageUrl} 
                            alt={room.name} 
                            className="card-img-top" 
                            style={{ height: '300px', objectFit: 'cover' }} 
                        />
                        <div className="card-body">
                            <h2 className="card-title fw-bold text-tropical-primary">{room.name}</h2>
                            <p className="text-muted">{room.description}</p>
                            
                            {/* Key Specs */}
                            <div className="d-flex justify-content-between my-3 border-top pt-3">
                                <p className="mb-0 text-dark fw-bold">
                                    <BiGroup className="me-1" /> Max Guests: <span className='text-primary'>{room.maxGuests}</span>
                                </p>
                                <p className="mb-0 text-dark fw-bold">
                                    <BiExpandAlt className="me-1" /> Size: <span className='text-primary'>{room.size} sq.ft.</span>
                                </p>
                            </div>

                            {/* Features List */}
                            <h5 className="mt-4 mb-3 text-tropical-dark border-bottom pb-2">Room Features</h5>
                            <ul className="list-unstyled row">
                                {room.features.map((feature, index) => (
                                    <li key={index} className="col-md-6 mb-2">
                                        <BiCheckCircle className="text-success me-2" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 2. BOOKING FORM & SUMMARY (Right Column) */}
                <div className="col-lg-6">
                    <div className="card shadow-lg tropical-card p-4 bg-white">
                        <h3 className="mb-4 text-tropical-dark">Reservation Details</h3>
                        
                        <form onSubmit={handleBooking}>
                            
                            {/* Date Selection */}
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <label htmlFor="checkIn" className="form-label">Check-In Date</label>
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        id="checkIn" 
                                        onChange={(e) => setCheckInDate(e.target.value)} 
                                        required 
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="checkOut" className="form-label">Check-Out Date</label>
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        id="checkOut" 
                                        onChange={(e) => setCheckOutDate(e.target.value)} 
                                        required 
                                    />
                                </div>
                            </div>
                            
                            {/* Guests Input */}
                            <div className="mb-4">
                                <label htmlFor="guests" className="form-label">Number of Guests</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="guests" 
                                    min="1" 
                                    max={room.maxGuests} 
                                    value={guests} 
                                    onChange={(e) => setGuests(e.target.value)} 
                                    required 
                                />
                                <div className="form-text">Max occupancy for this room is {room.maxGuests} guests.</div>
                            </div>
                            
                            {/* Pricing Summary Mockup */}
                            <div className="p-3 bg-tropical-light rounded mb-4">
                                <h4 className="border-bottom pb-2 mb-3">Price Breakdown ({nights} Nights)</h4>
                                <div className="d-flex justify-content-between">
                                    <span>{room.name} ({nights} x ${room.price})</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Taxes & Fees (10%)</span>
                                    <span>+ ${tax.toFixed(2)}</span>
                                </div>
                                <hr className="my-2" />
                                <div className="d-flex justify-content-between fs-5 fw-bold text-success">
                                    <span>Total Due Today</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Booking Button */}
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-success btn-lg fw-bold">
                                    <BiCreditCard className="me-2" /> Confirm & Pay Now
                                </button>
                                <small className="text-center text-muted">A 50% deposit is required to secure your booking.</small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;