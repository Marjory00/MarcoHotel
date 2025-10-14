// client/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/MC-icon.png'; 
import { BiUserCircle } from 'react-icons/bi';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top shadow-sm"> 
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    <img 
                        src={logo} 
                        alt="MarcoHotel Logo" 
                        // FIX: Remove the hardcoded height attribute.
                        // The size is now controlled by the 45px height in App.css via the class:
                        className="navbar-logo-img d-inline-block align-text-top me-2" 
                    />
                    MarcoHotel
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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/rooms">Rooms</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reservations">Book Now</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    
                    {/* Login/User account link */}
                    <div className="d-flex ms-lg-auto">
                        <Link 
                            className="btn btn-warning text-dark fw-bold shadow-sm" 
                            to="/login"
                        >
                            <BiUserCircle className="me-1" size={20} /> Login / Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;