// client/src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Import social icons from IonIcons
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoMailOutline, IoCallOutline } from 'react-icons/io5'; 

const Footer = () => {
    return (
        // The 'footer' class has styling defined in App.css (Section 3)
        <footer className="footer mt-auto">
            <div className="container">
                <div className="row py-4">

                    {/* 1. About MarcoHotel */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-white mb-3">MarcoHotel</h5>
                        <p className="small text-tropical-light">
                            Your serene tropical escape. Dedicated to providing luxury, relaxation, and unforgettable memories on the coast.
                        </p>
                        <div className="d-flex align-items-center small mt-3">
                            <IoCallOutline className="me-2 fs-5" /> (555) MARCO-HOTEL
                        </div>
                        <div className="d-flex align-items-center small">
                            <IoMailOutline className="me-2 fs-5" /> info@mar cohotel.com
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-white mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-tropical-light">Home</Link></li>
                            <li><Link to="/rooms" className="text-tropical-light">Rooms</Link></li>
                            <li><Link to="/gallery" className="text-tropical-light">Gallery</Link></li>
                            <li><Link to="/contact" className="text-tropical-light">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* 3. Legal & Info */}
                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-white mb-3">Information</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/reservations" className="text-tropical-light">Reservations</Link></li>
                            <li><Link to="/privacy" className="text-tropical-light">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-tropical-light">Terms of Use</Link></li>
                            <li><Link to="/login" className="text-tropical-light">Admin Login</Link></li>
                        </ul>
                    </div>
                    
                    {/* 4. Social Links (NEW MOCKUP) */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-white mb-3">Connect With Us</h5>
                        
                        <div className="social-links d-flex mt-3">
                            {/* Facebook */}
                            <a 
                                href="https://facebook.com/marcohotel" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-icon text-white me-3 fs-3" 
                                title="Facebook"
                            >
                                <IoLogoFacebook />
                            </a>
                            
                            {/* Instagram */}
                            <a 
                                href="https://instagram.com/marcohotel_official" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-icon text-white me-3 fs-3" 
                                title="Instagram"
                            >
                                <IoLogoInstagram />
                            </a>
                            
                            {/* Twitter (X) */}
                            <a 
                                href="https://twitter.com/marcohotel" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-icon text-white me-3 fs-3" 
                                title="Twitter"
                            >
                                <IoLogoTwitter />
                            </a>

                            {/* YouTube */}
                            <a 
                                href="https://youtube.com/user/marcohotel" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-icon text-white me-3 fs-3" 
                                title="YouTube"
                            >
                                <IoLogoYoutube />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Line */}
                <div className="row">
                    <div className="col-12 pt-3 border-top border-tropical-dark">
                        <p className="text-center small text-tropical-light mb-0 py-2">
                            &copy; {new Date().getFullYear()} MarcoHotel. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;