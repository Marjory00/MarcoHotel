// MarcoHotel/client/src/pages/Home.jsx

import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 

// Import Components
import PromotionalBanner from '../components/PromotionalBanner'; 
import RoomCard from '../components/RoomCard'; 
import ReviewCard from '../components/ReviewCard';
// NOTE: MapLocation import REMOVED here
 
// Import Icons (Requires: npm install react-icons)
import { GiHotMeal, GiPillow, GiWaterfall } from 'react-icons/gi';
import { BiWorld, BiCalendarCheck, BiStar } from 'react-icons/bi';
import { MdOutlineLocalHotel } from 'react-icons/md';
import { FaWifi, FaSpa, FaCocktail } from 'react-icons/fa'; 

// Import local images from client/src/assets/
import heroImage from '../assets/welcome-cottage.jpg'; 
import aboutImage from '../assets/umbrella-pool.jpg'; 
import diningImage from '../assets/private-spaces.jpg'; 

// 🌟 Dummy data for the Review Cards section
const dummyReviews = [
    { id: 1, reviewerName: "A. Johnson", date: "2025-09-15", rating: 5.0, comment: "Absolutely stunning! The staff and amenities were top-tier. Pure luxury and pure relaxation." },
    { id: 2, reviewerName: "B. Smith", date: "2025-09-20", rating: 4.5, comment: "A serene escape. Minor issue with the Wi-Fi in the cafe, but overall excellent service and beautiful views." },
    { id: 3, reviewerName: "C. Patel", date: "2025-10-01", rating: 5.0, comment: "The food was exquisite, and the ocean-view balcony was breathtaking. I highly recommend the Grand Suite." },
];


const Home = () => {
    // State to store room data fetched from the API
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook to run the data fetch once after the component mounts
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                // *** CRITICAL FIX: Ensure the port is 5000 (your backend port) ***
                const response = await fetch('http://localhost:5000/api/rooms'); 
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                // We only want to show the first 3 rooms as "Featured"
                setRooms(data.slice(0, 3)); 
                
            } catch (err) {
                console.error("Failed to fetch rooms:", err);
                // The error message is customized to direct the user to the most likely cause
                setError('Failed to load featured rooms. Ensure the backend server is running on http://localhost:5000.');
            } finally {
                setLoading(false);
            }
        };

        fetchRooms();
    }, []); // Empty dependency array ensures this runs only once

    // Helper function to render the room content based on state
    const renderRoomContent = () => {
        if (loading) {
            return (
                // Wrapped content in a column div for proper Bootstrap row layout
                <div className="col-12 text-center my-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <p className="mt-2 text-muted">Loading featured rooms from the server...</p>
                </div>
            );
        }

        if (error) {
            return (
                // Wrapped content in a column div for proper Bootstrap row layout
                <div className="col-12 text-center alert alert-danger my-5" role="alert">
                    {error}
                </div>
            );
        }

        if (rooms.length === 0) {
            return (
                // Wrapped content in a column div for proper Bootstrap row layout
                <div className="col-12 text-center alert alert-info my-5" role="alert">
                    No featured rooms found.
                </div>
            );
        }

        // If data is ready, map over the rooms
        // This ensures that each RoomCard occupies 1/3 of the row on medium/large screens.
        return rooms.map(room => (
            <div key={room.id} className="col-lg-4 col-md-6 mb-4"> 
                <RoomCard 
                    name={room.name}
                    description={room.description}
                    // Use the image URL provided by the mock data (which are external Unsplash links)
                    imageUrl={room.imageUrl.startsWith('http') ? room.imageUrl : "https://source.unsplash.com/random/600x400/?room"} 
                    price={room.price}
                    maxGuests={room.maxGuests}
                />
            </div>
        ));
    };

    return (
        <>
            {/* 1. HERO SECTION (Full-Width) */}
            <header 
                className="hero-section text-white"
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            >
                <div className="hero-overlay"> 
                    <div className="container text-center"> 
                        <h1 className="display-1 fw-bold mb-3">MarcoHotel Paradise</h1>
                        <p className="lead mb-4">Your Private Beach Getaway, Where the Ocean Meets Serenity.</p>
                        <Link to="/rooms" className="btn btn-warning btn-lg shadow-lg text-dark fw-bold">
                            <BiCalendarCheck className="me-2" /> Book Your Dream Room
                        </Link>
                    </div>
                </div>
            </header>

            {/* 2. PROMOTIONAL BANNER */}
            <div className="container mt-5">
                <PromotionalBanner />
            </div>

            {/* 3. FEATURED ROOMS SECTION */}
            <section className="container my-5 py-3">
                <h2 className="text-center mb-5 display-4 text-tropical-dark">Featured Accommodations</h2>
                {/* FIX: Using row-cols-1 row-cols-md-3 g-4 for responsive grid layout */}
                <div className="row row-cols-1 row-cols-md-3 g-4"> 
                    {/* Render content based on loading/error state */}
                    {renderRoomContent()} 
                </div>
                <div className="text-center mt-4">
                    <Link to="/rooms" className="btn btn-primary btn-lg fw-bold">
                        View All Rooms
                    </Link>
                </div>
            </section>
            
            <hr className="container" />

            {/* 4. ABOUT US SECTION (Image and Text) */}
            <section className="container my-5 py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <img 
                            src={aboutImage} 
                            alt="Luxury resort pool with umbrella" 
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

            {/* 5. SERVICES & AMENITIES SECTION (Expanded & FIXED) */}
            <section className="bg-light py-5 text-center">
                <div className="container">
                    <h2 className="mb-4 display-4 text-tropical-dark">Indulge in Our Amenities</h2>
                    <p className="lead text-muted mb-5">Everything you need for the perfect tropical vacation.</p>
                    
                    {/* FIX: Use Bootstrap row-cols utility for responsive grid and g-4 for spacing */}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {/* Amenity 1: Infinity Pool */}
                        <div className="col">
                            <div className="p-4 border rounded shadow-sm tropical-card amenity-card-body">
                                <GiWaterfall className="display-4 text-info mb-3" />
                                <h5 className="fw-bold">Infinity Pool</h5>
                                <p>Dive into our stunning infinity pool overlooking the ocean, reserved just for guests.</p>
                            </div>
                        </div>
                        {/* Amenity 2: Beachfront Bar */}
                        <div className="col">
                            <div className="p-4 border rounded shadow-sm tropical-card amenity-card-body">
                                <FaCocktail className="display-4 text-warning mb-3" />
                                <h5 className="fw-bold">Beachfront Bar</h5>
                            </div>
                        </div>
                        {/* Amenity 3: Spa & Wellness */}
                        <div className="col">
                            <div className="p-4 border rounded shadow-sm tropical-card amenity-card-body">
                                <FaSpa className="display-4 text-danger mb-3" />
                                <h5 className="fw-bold">Spa & Wellness</h5>
                            </div>
                        </div>
                        {/* Amenity 4: Gourmet Dining */}
                        <div className="col">
                            <div className="p-4 border rounded shadow-sm tropical-card amenity-card-body">
                                <GiHotMeal className="display-4 text-success mb-3" />
                                <h5 className="fw-bold">Gourmet Dining</h5>
                            </div>
                        </div>
                        {/* Amenity 5: Premium Bedding */}
                        <div className="col">
                            <div className="p-4 border rounded shadow-sm tropical-card amenity-card-body">
                                <GiPillow className="display-4 text-primary mb-3" />
                                <h5 className="fw-bold">Premium Bedding</h5>
                            </div>
                        </div>
                        {/* Amenity 6: Free Wi-Fi */}
                        <div className="col">
                            <div className="p-4 border rounded shadow-sm tropical-card amenity-card-body">
                                <FaWifi className="display-4 text-info mb-3" /> 
                                <h5 className="fw-bold">Free High-Speed Wi-Fi</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. GUEST TESTIMONIALS SECTION (STATIC) */}
            <section 
                className="py-5 text-white testimonial-section"
                style={{
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

            {/* 6.5. DYNAMIC GUEST REVIEWS SECTION (NEW) */}
            <section className="container my-5 py-3">
                <h2 className="text-center mb-5 display-4 text-tropical-dark">More Guest Experiences</h2>
                {/* This uses the correct responsive grid: 1 col on small, 3 on medium+ */}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* Map over the dummy review data and render the ReviewCard */}
                    {dummyReviews.map(review => (
                        <div key={review.id} className="col">
                            <ReviewCard review={review} />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <Link to="/gallery" className="btn btn-primary btn-lg fw-bold">
                        Read All 500+ Reviews <BiStar className="ms-2" />
                    </Link>
                </div>
            </section>
            
            {/* NOTE: Removed section 7 (MapLocation) */}
            <hr className="container" />
            
            {/* 8. FINAL CALL TO ACTION SECTION */}
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