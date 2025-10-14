// MarcoHotel/client/src/components/PromotionalBanner.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- NEW: Import useNavigate hook

const PromotionalBanner = () => {
  const navigate = useNavigate(); // <-- NEW: Initialize the hook

  // Function to handle the button click and redirect
  const handleBookingClick = () => {
    // Navigate the user to the rooms page when they click the promotional button
    navigate('/rooms');
  };

  return (
    <div className="promotional-banner">
      <div className="banner-content">
        <span className="banner-tag">LIMITED TIME OFFER!</span>
        <h2 className="banner-title">Weekend Getaway Special: Save 20%</h2>
        <p className="banner-detail">
          Book a 2-night stay this month and receive <strong className="discount">20% off</strong> the standard rate, plus free breakfast!
        </p>
        <button 
          className="banner-button" 
          onClick={handleBookingClick} // <-- UPDATED: Use the new handler
        >
          Book Your Stay Now
        </button>
      </div>
    </div>
  );
};

export default PromotionalBanner;