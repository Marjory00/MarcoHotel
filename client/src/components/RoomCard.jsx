// MarcoHotel/client/src/components/RoomCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// FIX: Added BiCalendarCheck which was missing and causing a fatal error (blank page).
// Added BiBed for a useful guest detail display.
import { BiDollarCircle, BiUser, BiBed, BiCalendarCheck } from 'react-icons/bi'; 

// Destructure props: name, description, imageUrl, price, maxGuests
const RoomCard = ({ name, description, imageUrl, price, maxGuests }) => {
    // Determine the type of room for a simple badge
    const roomType = name.includes('Suite') || name.includes('Penthouse') ? 'Luxury' : 'Standard';
    
    // Simple logic to guess number of beds based on maxGuests
    const bedCount = maxGuests >= 4 ? 2 : 1; 

    return (
        // Apply custom styling for hover effect and standard Bootstrap card structure
        <div className="card h-100 tropical-card shadow-sm">
            
            {/* 1. Card Image (Fixed with card-img-fluid from App.css to ensure scaling) */}
            <div style={{ height: '200px', overflow: 'hidden' }}>
                <img 
                    src={imageUrl} 
                    className="card-img-top card-img-fluid" 
                    alt={name} 
                />
            </div>

            {/* 2. Card Body */}
            <div className="card-body d-flex flex-column">
                
                {/* Room Title and Badge */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title text-tropical-primary fw-bold mb-0">{name}</h5>
                    <span className={`badge ${roomType === 'Luxury' ? 'bg-primary' : 'bg-secondary'} text-white`}>
                        {roomType}
                    </span>
                </div>

                {/* Description */}
                <p className="card-text flex-grow-1 text-muted small">{description}</p>
                
                {/* Horizontal Divider */}
                <hr className="my-2" />

                {/* Pricing and Details Section */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    
                    {/* Price Tag */}
                    <div className="d-flex align-items-center text-success fw-bold me-3">
                        <BiDollarCircle className="me-1" size={20} />
                        <span className="fs-5">${price.toFixed(2)}</span>
                        <span className="ms-1 small text-muted">/ night</span>
                    </div>

                    {/* Guests Count and Bed Count */}
                    <div className="d-flex flex-grow-1 justify-content-end align-items-center text-tropical-dark small">
                        {/* NEW: Bed Count Detail */}
                        <div className='d-flex align-items-center me-3'>
                            <BiBed className="me-1" size={18} />
                            <span>Beds: {bedCount}</span>
                        </div>
                        {/* Original Guests Count */}
                        <div className='d-flex align-items-center'>
                            <BiUser className="me-1" size={18} />
                            <span>Guests: {maxGuests}</span>
                        </div>
                    </div>

                </div>

                {/* Call to Action Button (FIXED: The icon is now correctly imported) */}
                <Link 
                    to={`/rooms/${name.toLowerCase().replace(/\s/g, '-')}`} 
                    className="btn btn-warning fw-bold mt-auto"
                >
                    <BiCalendarCheck className="me-2" /> View & Book
                </Link>

            </div>
        </div>
    );
};

export default RoomCard;