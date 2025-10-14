import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiUser, BiEnvelope, BiLock } from 'react-icons/bi';

const Register = () => {
    // Navigate hook for redirecting the user after successful registration
    const navigate = useNavigate();

    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    // State for UI feedback and loading
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handler for updating input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setLoading(true);

        // 1. Client-Side Validation
        if (formData.password !== formData.confirmPassword) {
            setMessage({ type: 'danger', text: 'Passwords do not match!' });
            setLoading(false);
            return;
        }

        // Prepare data for the API (excluding confirmPassword)
        const userData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
        };

        try {
            // NOTE: Replace this with your actual API call to MarcoHotel/backend 
            // Example: const response = await axios.post('/api/users/register', userData);
            
            console.log('Attempting registration with data:', userData);
            await new Promise(resolve => setTimeout(resolve, 1500)); // Mock API delay

            // Mock success response
            setMessage({ type: 'success', text: 'Registration successful! Redirecting to login...' });
            
            setLoading(false);
            
            // Redirect to the Login page after a short delay
            setTimeout(() => {
                navigate('/login'); 
            }, 2000);

        } catch (error) {
            console.error('Registration failed:', error);
            // Simulate error response from backend
            const errorText = 'Registration failed. This email may already be in use.';
            setMessage({ type: 'danger', text: errorText });
            setLoading(false);
        }
    };

    return (
        <section className="bg-tropical-light py-5 min-vh-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="p-4 p-md-5 border rounded shadow-lg tropical-card bg-white">
                            <h1 className="text-center mb-4 display-5 text-tropical-dark">
                                <BiUser className="me-2 text-tropical-primary" /> Create Account
                            </h1>

                            {/* Alert Message for success/error */}
                            {message && (
                                <div className={`alert alert-${message.type} text-center`}>
                                    {message.text}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                {/* Full Name Field */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><BiUser /></span>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bold">Email address</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><BiEnvelope /></span>
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-bold">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><BiLock /></span>
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            id="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            minLength="6"
                                            disabled={loading}
                                        />
                                    </div>
                                </div>

                                {/* Confirm Password Field */}
                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="form-label fw-bold">Confirm Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><BiLock /></span>
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            id="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary btn-lg fw-bold" disabled={loading}>
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Registering...
                                            </>
                                        ) : 'Register Account'}
                                    </button>
                                </div>
                            </form>
                            
                            <hr className="my-4" />

                            {/* Login Link */}
                            <p className="text-center mb-0">
                                Already have an account? 
                                <Link to="/login" className="ms-2 text-tropical-primary fw-bold">Login Here</Link> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;