// client/src/pages/Rooms.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BiGroup, BiExpandAlt, BiDollarCircle } from 'react-icons/bi'; // Swapped BiWifi for BiDollarCircle for price

// NOTE: Ensure your backend folder is running on port 5000 (npm run dev)
// Based on your information, the server folder is now the backend folder.
const API_URL = 'http://localhost:5000/api/rooms/'; 

// --- MOCK DATA FALLBACK (Used if API fails) ---
const MOCK_ROOMS = [
    {
        _id: 'R101',
        name: 'Ocean View Studio',
        price: 250,
        maxGuests: 2,
        size: 350,
        imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?fit=crop&w=600&h=400',
        description: 'A cozy studio with breathtaking views of the ocean. Perfect for couples.',
        features: ['Balcony', 'King Bed', 'Free Wi-Fi'],
    },
    {
        _id: 'R205',
        name: 'Deluxe Suite w/ Patio',
        price: 450,
        maxGuests: 4,
        size: 700,
        imageUrl: 'https://images.unsplash.com/photo-1541489445903-0c4d7b1a64f3?fit=crop&w=600&h=400',
        description: 'Spacious suite featuring a private furnished patio and two queen beds.',
        features: ['Patio', 'Mini-Bar', 'A/C'],
    },
    {
        _id: 'R302',
        name: 'The Grand Villa',
        price: 990,
        maxGuests: 8,
        size: 1500,
        imageUrl: 'https://images.unsplash.com/photo-1505691938895-1ce6cf85e7a9?fit=crop&w=600&h=400',
        description: 'The ultimate luxury experience with multiple rooms, private plunge pool, and butler service.',
        features: ['Private Pool', 'Butler', 'Beach Access'],
    },
];
// ----------------------------------------------


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch rooms data from the backend API
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get(API_URL);
                // FIX: Ensure data access path is correct. 
                // We'll assume the API returns an array directly OR it's a field like 'data'.
                // If the response is the array, use: response.data
                // If the response is { data: [...], success: true }, use: response.data.data
                const fetchedRooms = response.data.data || response.data; 
                setRooms(fetchedRooms);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching rooms:', err);
                // Fallback to MOCK DATA if API connection fails
                setError('Failed to load rooms. Using mock data for display.');
                setRooms(MOCK_ROOMS); 
                setLoading(false);
            }
        };
        fetchRooms();
    }, []);

    // Loading State
    if (loading) {
        return (
            <div className="my-5 py-5 text-center">
                <h2 className='text-tropical-dark mb-4'>Fetching Available Rooms...</h2>
                <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    
    return (
        <div className="my-5">
            <h1 className="display-4 text-center mb-5 text-tropical-dark">Our Tropical Collection</h1>
            
            {/* Display error message if mock data is being used due to API failure */}
            {error && (
                <div className="alert alert-warning text-center fw-bold">{error}</div>
            )}

            {rooms.length === 0 ? (
                <div className="alert alert-info text-center">No rooms are currently listed. Check back soon!</div>
            ) : (
                <div className="row">
                    {rooms.map(room => (
                        <div key={room._id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="card shadow-lg tropical-card h-100">
                                <img 
                                    src={room.imageUrl || 'https://via.placeholder.com/600x400?text=Tropical+Room'} 
                                    className="card-img-top" 
                                    alt={room.name} 
                                    // Removed inline style and used a Bootstrap utility class (h-auto) for height consistency.
                                    style={{ height: '220px', objectFit: 'cover' }} 
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold text-tropical-primary mb-2">{room.name}</h5>
                                    
                                    {/* Room Specs */}
                                    <div className="text-muted small mb-3">
                                        <span className="me-3"><BiGroup className="me-1" /> Max Guests: {room.maxGuests}</span>
                                        <span className="me-3"><BiExpandAlt className="me-1" /> Size: {room.size} sq.ft.</span>
                                    </div>
                                    
                                    {/* Description */}
                                    {/* FIX: Check if room.description exists before using substring */}
                                    <p className="card-text flex-grow-1">
                                        {(room.description && room.description.length > 100) 
                                            ? `${room.description.substring(0, 100)}...` 
                                            : room.description || 'No description provided.'}
                                    </p>
                                    
                                    {/* Features - Optional badges */}
                                    <div className="mb-3">
                                        {/* FIX: Ensure room.features is an array before mapping */}
                                        {Array.isArray(room.features) && room.features.slice(0, 2).map((feature, index) => (
                                            <span key={index} className="badge bg-warning text-dark me-2" style={{ backgroundColor: 'var(--tropical-secondary)' }}>
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Price and Link */}
                                    <p className="card-text fw-bold fs-4 text-primary mt-auto">
                                        <BiDollarCircle className="me-1 text-success" /> {room.price} <small className="text-muted fs-6">/ night</small>
                                    </p>
                                    
                                    <Link to={`/booking/${room._id}`} className="btn btn-warning btn-lg w-100 text-dark fw-bold">
                                        View & Reserve
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