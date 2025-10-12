// client/src/pages/Rooms.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

// --- MOCK DATA ---
// This array replaces the data you would normally fetch from the backend API.
const MOCK_ROOMS = [
    {
        _id: '101',
        name: 'Standard King',
        description: 'A cozy room with a king-sized bed, perfect for short stays.',
        price: 150,
        maxGuests: 2,
        size: 300,
        imageUrl: 'https://via.placeholder.com/600x400?text=Standard+King+Room',
        features: ['Free WiFi', 'Flat-screen TV'],
    },
    {
        _id: '102',
        name: 'Deluxe Double',
        description: 'Spacious room featuring two comfortable double beds and a city view.',
        price: 220,
        maxGuests: 4,
        size: 450,
        imageUrl: 'https://via.placeholder.com/600x400?text=Deluxe+Double+Room',
        features: ['Balcony', 'Minibar', 'Free WiFi'],
    },
    {
        _id: '103',
        name: 'Executive Suite',
        description: 'Our premium offering: separate living area, large bathroom, and ocean views.',
        price: 450,
        maxGuests: 3,
        size: 700,
        imageUrl: 'https://via.placeholder.com/600x400?text=Executive+Suite+View',
        features: ['Separate living room', 'Jacuzzi bath', 'Complimentary breakfast'],
    },
    {
        _id: '104',
        name: 'Penthouse Apartment',
        description: 'The ultimate luxury experience with a full kitchen and private terrace.',
        price: 999,
        maxGuests: 5,
        size: 1200,
        imageUrl: 'https://via.placeholder.com/600x400?text=Penthouse+Luxury',
        features: ['Private Terrace', 'Full Kitchen', 'Butler Service'],
    },
];

const Rooms = () => {
    // Rooms data is now directly assigned from the mock array
    const rooms = MOCK_ROOMS;

    return (
        <div className="rooms-list">
            <h2 className="mb-4">Our Available Rooms (Mock Data)</h2>
            
            {rooms.length === 0 ? (
                <div className="alert alert-info">No rooms are currently listed.</div>
            ) : (
                <div className="row">
                    {rooms.map(room => (
                        // Bootstrap Card component for each room
                        <div key={room._id} className="col-md-6 col-lg-4 mb-4">
                            <div className="card shadow-sm">
                                <img 
                                    src={room.imageUrl} 
                                    className="card-img-top" 
                                    alt={room.name} 
                                    style={{ height: '200px', objectFit: 'cover' }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{room.name}</h5>
                                    <p className="card-text text-muted">
                                        Max Guests: {room.maxGuests} | Size: {room.size} sq.ft.
                                    </p>
                                    <p className="card-text">
                                        {room.description.substring(0, 75)}...
                                    </p>
                                    <p className="card-text fw-bold fs-4 text-success">
                                        ${room.price} / night
                                    </p>
                                    
                                    {/* Link uses the mock _id to navigate to the booking page */}
                                    <Link to={`/booking/${room._id}`} className="btn btn-primary">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Rooms;