import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BiGroup, BiExpandAlt, BiDollarCircle } from 'react-icons/bi';

// NOTE: Based on your saved information, the server folder is now the backend folder.
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
        description: 'A cozy studio with breathtaking views of the ocean. Perfect for couples. This description is intentionally a bit long to test the text trimming logic implemented below.',
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
    const DESCRIPTION_LIMIT = 100; // Limit for description preview

    // Fetch rooms data from the backend API
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get(API_URL);
                
                // Safely extract data, handling nested API responses or direct array responses
                const fetchedRooms = (response.data && response.data.data) || response.data;
                
                // Ensure what we set is an array, defaulting to an empty array if not
                if (Array.isArray(fetchedRooms)) {
                    setRooms(fetchedRooms);
                } else {
                    // Fallback if API returns an unexpected format but doesn't throw a full error
                    console.error('API response data is not an array:', fetchedRooms);
                    throw new Error('Unexpected API response format.'); 
                }

                setLoading(false);
            } catch (err) {
                console.error('Error fetching rooms (falling back to mock data):', err);
                
                // Fallback to MOCK DATA if API connection fails or format is wrong
                setError('Failed to load rooms from the server. Displaying limited mock data.');
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
            <div className="container"> 
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
                            <div key={room._id} className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex">
                                <div className="card shadow-lg tropical-card w-100 d-flex flex-column">
                                    <img 
                                        src={room.imageUrl || 'https://via.placeholder.com/600x400?text=Tropical+Room'} 
                                        className="card-img-top" 
                                        alt={room.name} 
                                        style={{ height: '220px', objectFit: 'cover' }} 
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title fw-bold text-tropical-primary mb-2">{room.name}</h5>
                                        
                                        {/* Room Specs */}
                                        <div className="text-muted small mb-3">
                                            <span className="me-3"><BiGroup className="me-1" /> Max Guests: **{room.maxGuests}**</span>
                                            <span className="me-3"><BiExpandAlt className="me-1" /> Size: **{room.size}** sq.ft.</span>
                                        </div>
                                        
                                        {/* Description with trimming and null check */}
                                        <p className="card-text flex-grow-1 text-secondary small">
                                            {(room.description && room.description.length > DESCRIPTION_LIMIT) 
                                                ? `${room.description.substring(0, DESCRIPTION_LIMIT)}...` 
                                                : room.description || 'No description provided.'}
                                        </p>
                                        
                                        {/* Features - Optional badges */}
                                        <div className="mb-3">
                                            {Array.isArray(room.features) && room.features.slice(0, 2).map((feature, index) => (
                                                <span key={index} className="badge text-dark me-2" style={{ backgroundColor: '#ffdd77' }}>
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Price and Link */}
                                        <p className="card-text fw-bold fs-4 text-primary mt-auto border-top pt-3">
                                            <BiDollarCircle className="me-1 text-success" /> **${room.price}** <small className="text-muted fs-6">/ night</small>
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
        </div>
    );
};

export default Rooms;