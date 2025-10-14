import React, { useState } from 'react'; // 🌟 IMPORT useState
import { Link } from 'react-router-dom'; 

// Import Icons
import { BiWorld, BiChevronDown, BiChevronUp } from 'react-icons/bi'; // 🌟 ADDED chevron icons

// Import image specifically for the hero section
import aboutUsHeroImage from '../assets/about-us-hero.jpg'; 

const AboutUs = () => {
    // 🌟 STATE: Manage the visibility of the new section
    const [isVisionOpen, setIsVisionOpen] = useState(false);

    // Handler to toggle the section's visibility
    const toggleVision = () => {
        setIsVisionOpen(!isVisionOpen);
    };

    return (
        <>
            {/* 1. HERO/BANNER SECTION */}
            <div 
                className="hero-section" 
                style={{ 
                    backgroundImage: `url(${aboutUsHeroImage})`, 
                    height: '50vh' 
                }}
            >
                <div className="hero-overlay">
                    <h1 className="display-3 fw-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                        MarcoHotel: Experience The Exotic
                    </h1>
                    <p className="lead fw-light">
                        Since 1985, blending luxury with the serene beauty of the tropics.
                    </p>
                </div>
            </div>

            {/* 2. MAIN CONTENT & COMMITMENT */}
            <div className="container my-5">
                
                <div className="row my-5 py-3">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="mb-4">Our Commitment</h2>
                        <p className="fs-5 text-tropical-dark">
                            At MarcoHotel, our mission is to provide an unparalleled escape. We believe in **sustainable luxury**, exceptional service, and creating a truly memorable experience for every guest. Our staff, led by a passion for hospitality, is dedicated to making your stay perfect.
                        </p>
                        <p className="mb-4">
                            From our locally-sourced dining options to our commitment to preserving the environment around us, every detail is crafted to ensure harmony and tranquility.
                        </p>
                        
                        {/* 🌟 BUTTON TO TOGGLE THE NEW SECTION */}
                        <button 
                            className="btn btn-warning mt-3 fw-bold"
                            onClick={toggleVision} // Use the toggle function
                            aria-expanded={isVisionOpen}
                        >
                            <BiWorld className="me-2" /> 
                            {isVisionOpen ? 'Hide Our Vision' : 'Explore Our Vision'} 
                            {isVisionOpen ? <BiChevronUp className="ms-2" size={20} /> : <BiChevronDown className="ms-2" size={20} />}
                        </button>
                    </div>
                </div>

                {/* -------------------------------------------------------- */}
                {/* 🌟 4. EXPANDABLE "EXPLORE OUR VISION" SECTION */}
                {/* -------------------------------------------------------- */}
                {isVisionOpen && ( // 🌟 Conditionally render the new section
                    <div className="row my-5 pt-3 border-top border-2">
                        <div className="col-12 text-center mb-4">
                            <h3 className="text-tropical-primary display-6">A Future of Sustainable Luxury</h3>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h4 className='text-tropical-dark'>Eco-Conscious Operations</h4>
                            <p className="text-muted">
                                Our vision extends beyond immediate comfort. We aim to be a **zero-waste** hotel by 2030, powered entirely by renewable energy. This includes conserving natural resources and supporting local biodiversity projects to ensure the beauty of the tropics remains for future generations.
                            </p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h4 className='text-tropical-dark'>Community & Culture</h4>
                            <p className="text-muted">
                                We believe in enriching the local community. Our vision involves partnering with artisan groups, funding educational programs, and providing sustainable career paths, making MarcoHotel a beacon of **cultural exchange** and economic stability in the region.
                            </p>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <Link to="/rooms" className="btn btn-primary fw-bold">
                                See How Our Vision Translates to Your Stay
                            </Link>
                        </div>
                    </div>
                )}


                {/* 3. FEATURE CARDS */}
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                    <div className="col">
                        <div className="card h-100 tropical-card p-3 text-center">
                            <div className="card-body">
                                <h4 className="card-title text-tropical-primary">Exquisite Dining</h4>
                                <p className="card-text">Award-winning chefs using the freshest local ingredients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 tropical-card p-3 text-center">
                            <div className="card-body">
                                <h4 className="card-title text-tropical-primary">Sustainability</h4>
                                <p className="card-text">Committed to eco-friendly practices and local conservation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 tropical-card p-3 text-center">
                            <div className="card-body">
                                <h4 className="card-title text-tropical-primary">Personalized Service</h4>
                                <p className="card-text">Every guest receives a tailored, luxury experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;