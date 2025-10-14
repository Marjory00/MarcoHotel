// MarcoHotel/client/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// REMOVED: import './Home.css'; // This file is no longer necessary as styles are in App.css

// Import Icons (Requires: npm install react-icons)
import { GiPalmTree, GiHotMeal, GiPillow, GiWaterfall } from 'react-icons/gi';
import { BiWorld, BiCalendarCheck, BiStar } from 'react-icons/bi';
import { MdOutlineLocalHotel } from 'react-icons/md';
import { FaWifi, FaSpa, FaCocktail } from 'react-icons/fa'; 

// Import local images from client/src/assets/
// NOTE: Ensure these files exist in client/src/assets/
import heroImage from '../assets/welcome-cottage.jpg'; 
import aboutImage from '../assets/umbrella-pool.jpg'; 
import diningImage from '../assets/private-spaces.jpg'; 

const Home = () => {
    return (
        <>
            {/* 1. HERO SECTION (Full-Width) 
                - Uses the 'hero-section' and 'hero-overlay' classes defined in App.css
            */}
            <header 
                className="hero-section text-white"
                style={{
                    // Dynamic image URL MUST stay in the style attribute
                    backgroundImage: `url(${heroImage})`,
                }}
            >
                {/* *** CRITICAL FIX: Removed the 'container' class. *** The 'hero-overlay' class now handles the full width and centering 
                    defined in App.css, which fixes the left-alignment issue.
                */}
                <div className="hero-overlay"> 
                    {/* The text content needs its own inner container to constrain width */}
                    <div className="container text-center"> 
                        <h1 className="display-1 fw-bold mb-3">MarcoHotel Paradise</h1>
                        <p className="lead mb-4">Your Private Beach Getaway, Where the Ocean Meets Serenity.</p>
                        <Link to="/rooms" className="btn btn-warning btn-lg shadow-lg text-dark fw-bold">
                            <BiCalendarCheck className="me-2" /> Book Your Dream Room
                        </Link>
                    </div>
                </div>
            </header>

            {/* 2. ABOUT US SECTION (Image and Text) */}
            <section className="container my-5 py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <img 
                            src={aboutImage} 
                            alt="Luxury resort pool with umbrella" 
                            // The 'tropical-card' class provides the rounded, shadowed, hovered look from App.css
                            className="img-fluid rounded shadow-lg tropical-card about-img"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="mb-4 display-4 text-tropical-dark">The MarcoHotel Difference</h2>
                        <p className="lead text-muted">
                            Nestled in a secluded cove, MarcoHotel offers more than just a stay—it offers an experience. We blend authentic island culture with world-class luxury to create unforgettable memories.
                        </p>
                        <p>
                            From private ocean-view balconies to personalized concierge service, every detail is crafted for your utmost relaxation. Come discover your tropical sanctuary.
                        </p>
                        <Link to="/rooms" className="btn btn-primary mt-3 fw-bold">
                            <MdOutlineLocalHotel className="me-2" /> View Our Suites
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3. SERVICES & AMENITIES SECTION (Expanded) */}
            <section className="bg-light py-5 text-center">
                <div className="container">
                    <h2 className="mb-4 display-4 text-tropical-dark">Indulge in Our Amenities</h2>
                    <p className="lead text-muted mb-5">Everything you need for the perfect tropical vacation.</p>
                    
                    <div className="row">
                        {/* 1. Infinity Pool */}
                        <div className="col-md-4 mb-4">
                            <div className="p-4 border rounded shadow-sm tropical-card">
                                <GiWaterfall className="display-4 text-info mb-3" />
                                <h5 className="fw-bold">Infinity Pool</h5>
                                <p>Dive into our stunning infinity pool overlooking the ocean, reserved just for guests.</p>
                            </div>
                        </div>
                        {/* 2. Beachfront Bar */}
                        <div className="col-md-4 mb-4">
                            <div className="p-4 border rounded shadow-sm tropical-card">
                                <FaCocktail className="display-4 text-warning mb-3" />
                                <h5 className="fw-bold">Beachfront Bar</h5>
                                <p>Sip on exotic cocktails at sunset, prepared by our award-winning mixologists.</p>
                            </div>
                        </div>
                        {/* 3. Spa & Wellness */}
                        <div className="col-md-4 mb-4">
                            <div className="p-4 border rounded shadow-sm tropical-card">
                                <FaSpa className="display-4 text-danger mb-3" />
                                <h5 className="fw-bold">Spa & Wellness</h5>
                                <p>Rejuvenate with traditional island massages and custom therapeutic treatments.</p>
                            </div>
                        </div>
                        {/* 4. Gourmet Dining */}
                        <div className="col-md-4 mb-4">
                            <div className="p-4 border rounded shadow-sm tropical-card">
                                <GiHotMeal className="display-4 text-success mb-3" />
                                <h5 className="fw-bold">Gourmet Dining</h5>
                                <p>Experience world-class cuisine with fresh, locally sourced ingredients.</p>
                            </div>
                        </div>
                        {/* 5. 24/7 Concierge */}
                        <div className="col-md-4 mb-4">
                            <div className="p-4 border rounded shadow-sm tropical-card">
                                <GiPillow className="display-4 text-primary mb-3" />
                                <h5 className="fw-bold">24/7 Concierge</h5>
                                <p>Our dedicated team is always ready to assist with excursions and requests.</p>
                            </div>
                        </div>
                        {/* 6. FREE WIFI */}
                        <div className="col-md-4 mb-4">
                            <div className="p-4 border rounded shadow-sm tropical-card">
                                <FaWifi className="display-4 text-info mb-3" /> 
                                <h5 className="fw-bold">Free High-Speed Wi-Fi</h5>
                                <p>Stay connected with fast internet access across the entire property.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. GUEST TESTIMONIALS SECTION (Image Background with Parallax) 
                - Uses the 'testimonial-section' and 'testimonial-overlay' classes from App.css
            */}
            <section 
                className="py-5 text-white testimonial-section"
                style={{
                    // Dynamic image URL MUST stay in the style attribute
                    backgroundImage: `url(${diningImage})`,
                }}
            >
                <div className="testimonial-overlay">
                    <div className="container text-center">
                        <h2 className="display-5 mb-4 fw-bold">What Our Guests Say</h2>
                        <blockquote className="blockquote">
                            <p className="mb-0 fs-4 fst-italic">
                                <BiStar className="text-warning me-2" /> "The accommodations were stunning—pure private luxury. MarcoHotel is truly a hidden gem!"
                            </p>
                            <footer className="blockquote-footer text-light mt-2">
                                - Sarah K., <cite title="Source Title">London</cite>
                            </footer>
                        </blockquote>
                        <Link to="/rooms" className="btn btn-warning btn-lg mt-4 text-dark fw-bold">
                            Plan Your Stay
                        </Link>
                    </div>
                </div>
            </section>
            
            {/* 5. FINAL CALL TO ACTION SECTION */}
            <section className="py-5 text-center">
                <div className="container">
                    <h2 className="display-5 mb-3">Ready for Paradise?</h2>
                    <p className="lead mb-4 text-muted">Don't wait, your tropical escape is just a click away.</p>
                    <Link to="/rooms" className="btn btn-success btn-lg fw-bold">
                        <BiWorld className="me-2" /> Book Now
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;