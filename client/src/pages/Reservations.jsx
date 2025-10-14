
import React from 'react';
import { BiCalendarCheck, BiHotel, BiUser } from 'react-icons/bi';

const Reservations = () => {
    return (
        <>
            <section className="bg-tropical-light py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="display-4 fw-bold text-center text-tropical-dark mb-4">
                                <BiCalendarCheck className="me-3" /> Book Your Tropical Escape
                            </h1>
                            <p className="lead text-center text-muted mb-5">
                                Select your dates and preferred room type below to secure your stay at MarcoHotel Paradise.
                            </p>

                            <div className="tropical-card p-4 p-md-5 shadow-lg">
                                <form>
                                    <div className="row mb-4">
                                        {/* Check-In Date */}
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="checkIn" className="form-label fw-bold text-tropical-dark">Check-In Date</label>
                                            <input 
                                                type="date" 
                                                className="form-control form-control-lg" 
                                                id="checkIn" 
                                                required 
                                            />
                                        </div>
                                        {/* Check-Out Date */}
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="checkOut" className="form-label fw-bold text-tropical-dark">Check-Out Date</label>
                                            <input 
                                                type="date" 
                                                className="form-control form-control-lg" 
                                                id="checkOut" 
                                                required 
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        {/* Room Type */}
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="roomType" className="form-label fw-bold text-tropical-dark">Room Type</label>
                                            <div className="input-group input-group-lg">
                                                <span className="input-group-text"><BiHotel /></span>
                                                <select className="form-select" id="roomType" required>
                                                    <option value="">Select Room...</option>
                                                    <option value="ocean_view">Ocean View Suite</option>
                                                    <option value="garden_view">Garden View Cottage</option>
                                                    <option value="deluxe">Deluxe King Room</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* Guests */}
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="guests" className="form-label fw-bold text-tropical-dark">Number of Guests</label>
                                            <div className="input-group input-group-lg">
                                                <span className="input-group-text"><BiUser /></span>
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    id="guests" 
                                                    min="1" 
                                                    max="6" 
                                                    placeholder="1" 
                                                    required 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <h3 className="h5 text-tropical-dark mt-4 mb-3">Contact Information</h3>
                                    <div className="row mb-4">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="name" className="form-label">Full Name</label>
                                            <input type="text" className="form-control" id="name" required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email" className="form-label">Email Address</label>
                                            <input type="email" className="form-control" id="email" required />
                                        </div>
                                    </div>

                                    <div className="d-grid mt-4">
                                        <button type="submit" className="btn btn-primary btn-lg fw-bold">
                                            Check Availability & Book
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reservations;