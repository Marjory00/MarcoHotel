// MarcoHotel/client/src/pages/Contact.jsx

import React from 'react';
// 🗺️ NEW: Import the MapLocation component
import MapLocation from '../components/MapLocation'; 

// NEW: Import Icons (Requires: npm install react-icons)
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'; 

const Contact = () => {
    return (
        <div className="container py-5">
            <h1 className="display-4 text-center mb-4 text-tropical-dark">Contact Us</h1>
            <p className="lead text-center text-muted mb-5">We'd love to hear from you. Reach out via the form or contact details below.</p>
            
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    
                    {/* 1. CONTACT FORM */}
                    <div className="p-4 border rounded shadow-lg bg-white mb-5 tropical-card">
                        <h3 className="mb-4">Send a Message</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nameInput" className="form-label">Name</label>
                                <input type="text" className="form-control" id="nameInput" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Email</label>
                                <input type="email" className="form-control" id="emailInput" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="messageTextarea" className="form-label">Message</label>
                                <textarea className="form-control" id="messageTextarea" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg">Submit Inquiry</button>
                        </form>
                    </div>

                    {/* 2. CONTACT DETAILS & ADDRESS */}
                    <div className="row text-center mb-5 g-4">
                        {/* Phone */}
                        <div className="col-md-4">
                            <FiPhone className="display-5 text-primary mb-2"/>
                            <h4 className="fw-bold">Phone</h4>
                            <p className="lead">+1 (555) 123-4567</p>
                        </div>
                        {/* Email */}
                        <div className="col-md-4">
                            <FiMail className="display-5 text-primary mb-2"/>
                            <h4 className="fw-bold">Email</h4>
                            <p className="lead">reservations@marcohotelexample.com</p>
                        </div>
                        {/* Address */}
                        <div className="col-md-4">
                            <FiMapPin className="display-5 text-primary mb-2"/>
                            <h4 className="fw-bold">Location</h4>
                            <p className="lead">Marco Island, Private Beach Cove, The Tropics, 10001</p>
                        </div>
                    </div>

                    {/* 3. MAP LOCATION SECTION 🗺️ (Moved from Home.jsx) */}
                    <div className="mt-5 pt-3 border-top">
                        <h2 className="text-center mb-4 display-5 text-tropical-dark">Find Us Here</h2>
                        <MapLocation />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;