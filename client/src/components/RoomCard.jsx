import React from 'react';

// NOTE: No need to import a separate CSS file since we put all styles in App.css

/**
 * A reusable component to display details for a single room type.
 * @param {object} props
 * @param {string} props.name - Name of the room (e.g., Deluxe King)
 * @param {string} props.description - Short summary of the room
 * @param {string} props.imageUrl - URL for the room's main image
 * @param {number} props.price - Starting nightly price
 * @param {number} props.maxGuests - Maximum number of guests
 */
const RoomCard = ({ name, description, imageUrl, price, maxGuests }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      {/* Uses the custom tropical-card class defined in App.css */}
      <div className="card tropical-card h-100">
        <img 
          className="card-img-top" 
          src={imageUrl} 
          alt={`Image of the ${name}`} 
          // You can set a fixed height for consistency if needed
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer bg-white border-top-0 pt-0">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="h4 mb-0 text-tropical-primary">
              ${price.toFixed(2)} 
              <small className="text-muted font-weight-normal">/ night</small>
            </span>
            <span className="text-muted">
              Guests: <span className="font-weight-bold">{maxGuests}</span>
            </span>
          </div>
          <a href="/rooms/details" className="btn btn-primary btn-block">
            View Details & Book
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;