
// client/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Bootstrap Navbar component
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand/Logo for the hotel */}
        <Link className="navbar-brand" to="/">
          🏨 **MarcoHotel**
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Navigation link to Home */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {/* Navigation link to Rooms */}
            <li className="nav-item">
              <Link className="nav-link" to="/rooms">Rooms</Link>
            </li>
            {/* Login/User account link */}
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-info ms-2" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;