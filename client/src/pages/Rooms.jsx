import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// Importing additional icons for features
import { BiGroup, BiExpandAlt, BiDollarCircle, BiWifi, BiWater, BiCookie, BiCar, BiInfoCircle } from 'react-icons/bi';

// NOTE: Based on your saved information, the server folder is now the backend folder.
// Using the specified API URL for the rooms endpoint.
const API_URL = 'http://localhost:5000/api/rooms/'; 

// --- MOCK DATA FALLBACK (Used if API fails) ---
const MOCK_ROOMS = [
    {
        _id: 'R101',
        name: 'Ocean View Studio',
        price: 250,
        maxGuests: 2,
        size: 350,
        // ➡️ NEW, STABLE IMAGE URL: Using Unsplash images directly with a fixed ID
        imageUrl: 'https://images.unsplash.com/photo-1540196884845-d8677c77f0a8?w=600&h=400&fit=crop', // Cozy hotel room
        description: 'A cozy studio with breathtaking views of the ocean. Perfect for couples. Enjoy the sunrise from your comfortable king-size bed.',
        // ➡️ MORE FEATURES ADDED
        features: [
            { icon: BiWifi, text: 'High-Speed Wi-Fi' },
            { icon: BiWater, text: 'Rainfall Shower' },
            { icon: BiGroup, text: 'Max Guests: 2' }
        ],
    },
    {
        _id: 'R205',
        name: 'Deluxe Suite w/ Patio',
        price: 450,
        maxGuests: 4,
        size: 700,
        // ➡️ NEW, STABLE IMAGE URL: Using Unsplash images directly with a fixed ID
        imageUrl: 'https://images.unsplash.com/photo-1563299797-2003c273e913?w=600&h=400&fit=crop', // Deluxe suite interior
        description: 'Spacious suite featuring a private furnished patio and two queen beds. Ideal for small families or groups seeking relaxation.',
        // ➡️ MORE FEATURES ADDED
        features: [
            { icon: BiCookie, text: 'Complimentary Snacks' },
            { icon: BiExpandAlt, text: '700 sq.ft.' },
            { icon: BiWater, text: 'Pool Access' },
            { icon: BiGroup, text: 'Max Guests: 4' }
        ],
    },
    {
        _id: 'R302',
        name: 'The Grand Villa',
        price: 990,
        maxGuests: 8,
        size: 1500,
        // ➡️ NEW, STABLE IMAGE URL: Using Unsplash images directly with a fixed ID
        imageUrl: 'https://images.unsplash.com/photo-1579758774797-4d7a18774e1d?w=600&h=400&fit=crop', // Poolside villa
        description: 'The ultimate luxury experience with multiple rooms, a private plunge pool, and personalized butler service.',
        // ➡️ MORE FEATURES ADDED
        features: [
            { icon: BiWater, text: 'Private Plunge Pool' },
            { icon: BiCar, text: 'Valet Parking Included' },
            { icon: BiGroup, text: 'Max Guests: 8' },
            { icon: BiDollarCircle, text: 'Butler Service' }
        ],
    },
];
// ----------------------------------------------

// Component to render a feature item
const FeatureBadge = ({ feature }) => {
    // Determine which icon to use, defaulting to BiExpandAlt if not specified
    const Icon = feature.icon || BiExpandAlt; 
    return (
        // Uses the tropical-secondary (Amber/Gold)
        <span className="badge text-dark me-2 mb-1 p-2 small fw-normal" style={{ backgroundColor: 'var(--tropical-secondary)' }}>
            <Icon className="me-1" style={{ position: 'relative', top: '2px' }}/>
            {feature.text}
        </span>
    );
}

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const DESCRIPTION_LIMIT = 100; // Limit for description preview

    // Fetch rooms data from the backend API
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                // Fetch data from your backend
                const response = await axios.get(API_URL);
                
                const fetchedRooms = (response.data && response.data.data) || response.data;
                
                if (Array.isArray(fetchedRooms)) {
                    setRooms(fetchedRooms);
                    setError(null); 
                } else {
                    console.error('API response data is not an array:', fetchedRooms);
                    throw new Error('Unexpected API response format.'); 
                }

                setLoading(false);
            } catch (err) {
                console.error('Error fetching rooms (falling back to mock data):', err);
                
                setError('Failed to load rooms from the server. Displaying limited mock data. (Check if your backend is running!)');
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
        <div className="rooms-page">
            
            {/* 🛠️ FIX: Using the new rooms-hero-section/rooms-hero-overlay classes */}
            <div 
                className="rooms-hero-section" 
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1540196884845-d8677c77f0a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&h=400&q=80)',
                }}
            >
                {/* This overlay handles the dark brand-blue background and centering (styles defined in App.css) */}
                <div className="rooms-hero-overlay">
                    
                    <div className="container text-center">
                        
                        {/* Title text color and styling is now controlled by .rooms-hero-overlay h1 in App.css */}
                        <h1 className="fw-bolder mb-3" 
                            style={{ 
                                fontFamily: 'var(--font-serif)' 
                            }}>
                            Your Tropical Escape Awaits
                        </h1>
                        
                        {/* Subtitle text color and styling is now controlled by .rooms-hero-overlay p in App.css */}
                        <p className="lead fw-bold">
                            Find the perfect room to start your dream vacation at MarcoHotel.
                        </p>
                    </div>
                </div>
            </div>
            {/* --- END HERO BANNER --- */}


            <div className="container"> 
                {/* ➡️ ORIGINAL ROOMS LISTING HEADER */}
                <h2 className="display-4 text-center mb-5 text-tropical-dark">Our Tropical Collection</h2>
                
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
                                    {/* 📸 Image from URL (from API or Mock Data) */}
                                    <img 
                                        src={room.imageUrl || 'https://placehold.it/600x400?text=Image+Not+Available'} 
                                        className="card-img-top" 
                                        alt={room.name} 
                                        style={{ height: '220px', objectFit: 'cover' }} 
                                    />
                                    <div className="card-body d-flex flex-column">
                                        {/* Name uses the primary color (Deep Blue) */}
                                        <h5 className="card-title fw-bold text-tropical-primary mb-2">{room.name}</h5>
                                        
                                        {/* Room Specs (Size) */}
                                        <div className="text-muted small mb-3 border-bottom pb-2">
                                            <span className="me-3"><BiExpandAlt className="me-1" /> Size: **{room.size}** sq.ft.</span>
                                        </div>
                                        
                                        {/* Description with trimming and null check */}
                                        <p className="card-text flex-grow-1 text-secondary small">
                                            {(room.description && room.description.length > DESCRIPTION_LIMIT) 
                                                ? `${room.description.substring(0, DESCRIPTION_LIMIT)}...` 
                                                : room.description || 'No description provided.'}
                                        </p>
                                        
                                        {/* 🚀 ENHANCED FEATURES DISPLAY */}
                                        <div className="mb-3 d-flex flex-wrap">
                                            {Array.isArray(room.features) && room.features.slice(0, 4).map((feature, index) => (
                                                <FeatureBadge key={index} feature={feature} />
                                            ))}
                                        </div>

                                        {/* Price and Link */}
                                        <p className="card-text fw-bold fs-4 text-primary mt-auto border-top pt-3">
                                            <BiDollarCircle className="me-1 text-success" /> **${room.price}** <small className="text-muted fs-6">/ night</small>
                                        </p>
                                        
                                        {/* Link to detail/booking page */}
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

            {/* 🆕 SECTION 2: EXPLORE MORE / CTA */}
            <div className="container mt-5 pt-5 pb-5">
                <div className="p-4 text-center" style={{ backgroundColor: 'var(--tropical-light)', borderRadius: '10px' }}>
                    <BiInfoCircle size={40} className="text-tropical-primary mb-3" />
                    <h3 className="mb-3 text-tropical-dark">Need Help Choosing?</h3>
                    <p className="lead mb-4 text-secondary">
                        Contact our concierge service for personalized recommendations or check out our full amenities list.
                    </p>
                    <Link to="/contact" className="btn btn-primary me-3 fw-bold">
                        Contact Us
                    </Link>
                    <Link to="/amenities" className="btn btn-outline-secondary fw-bold">
                        View Hotel Amenities
                    </Link>
                </div>
            </div>
            {/* --- END EXPLORE MORE SECTION --- */}

        </div>
    );
};

export default Rooms;