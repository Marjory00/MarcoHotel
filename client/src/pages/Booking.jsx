import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BiGroup, BiExpandAlt, BiCreditCard, BiCheckCircle } from 'react-icons/bi';

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
    const { roomId } = useParams(); 
    
    // State for form inputs, initialized with empty strings
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState(1);
    const [loading, setLoading] = useState(true);

    // Find the room using the ID from the mock data
    const room = MOCK_ROOMS.find(r => r._id === roomId);
    // Get today's date for input validation minimum
    const todayDate = new Date().toISOString().split('T')[0];

    // --- REAL-TIME PRICE CALCULATION FUNCTION ---
    const calculateTotal = () => {
        const pricePerNight = room ? room.price : 0;
        let nights = 0;

        if (checkInDate && checkOutDate) {
            const checkIn = new Date(checkInDate);
            const checkOut = new Date(checkOutDate);
            
            // Calculate nights only if check-out is after check-in
            if (checkOut > checkIn) {
                // To avoid time zone issues, reset time to midnight for accurate day difference
                const oneDay = 1000 * 60 * 60 * 24;
                const diffTime = checkOut.getTime() - checkIn.getTime();
                nights = Math.round(diffTime / oneDay);
            }
        }

        const subtotal = pricePerNight * nights;
        const taxRate = 0.10; // 10% mock tax
        const tax = subtotal * taxRate;
        
        return { subtotal, tax, total: subtotal + tax, nights };
    };

    // Calculate totals based on current state
    const { subtotal, tax, total, nights } = calculateTotal();
    // ---------------------------------------------

    // Simulate loading and handle the room finding
    useEffect(() => {
        if (room) {
            setLoading(false);
        } else {
            setLoading(false);
        }
        // Optionally set a default Check-In date for better UX
        // setCheckInDate(todayDate); 
    }, [roomId, room, todayDate]);


    const handleBooking = (e) => {
        e.preventDefault();
        
        // Final validation before mock submission
        if (nights <= 0) {
             alert('Please select valid Check-In and Check-Out dates (Check-Out must be after Check-In).');
             return;
        }

        // Placeholder for sending booking data to backend
        alert(`MOCK SUCCESS: Booking requested for ${room.name} for ${nights} nights at $${total.toFixed(2)}.`);
        console.log({ checkInDate, checkOutDate, guests, total, roomName: room.name });
    };

    if (loading) {
        return <div className="text-center py-5">Loading room details...</div>;
    }

    if (!room) {
        return <div className="text-center py-5"><h1 className="display-5">Room Not Found 😔</h1><p className="lead">The requested room ID (**{roomId}**) does not exist.</p><Link to="/rooms" className="btn btn-primary mt-3">Browse All Rooms</Link></div>;
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
                                        value={checkInDate} 
                                        required 
                                        min={todayDate}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="checkOut" className="form-label">Check-Out Date</label>
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        id="checkOut" 
                                        onChange={(e) => setCheckOutDate(e.target.value)} 
                                        value={checkOutDate} 
                                        required 
                                        // Min date for check-out is the check-in date or today, whichever is later
                                        min={checkInDate || todayDate} 
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
                                <div className="form-text">Max occupancy for this room is **{room.maxGuests}** guests.</div>
                            </div>
                            
                            {/* Pricing Summary */}
                            <div className="p-3 bg-tropical-light rounded mb-4">
                                <h4 className="border-bottom pb-2 mb-3">Price Breakdown ({nights} {nights === 1 ? 'Night' : 'Nights'})</h4>
                                
                                {nights <= 0 && checkInDate && checkOutDate ? (
                                    <div className="alert alert-danger p-2 small">
                                        **Error:** Check-out must be at least one day after check-in.
                                    </div>
                                ) : null}

                                <div className="d-flex justify-content-between">
                                    <span>{room.name} ({nights} x ${room.price.toFixed(2)})</span>
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
                                <button 
                                    type="submit" 
                                    className="btn btn-success btn-lg fw-bold"
                                    // Disable if dates are not valid or the total is zero
                                    disabled={nights <= 0 || total === 0}
                                >
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