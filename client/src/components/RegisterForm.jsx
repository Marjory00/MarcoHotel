import React, { useState } from 'react';
import { BiUser, BiEnvelope, BiLock, BiAt } from 'react-icons/bi';

const RegisterForm = ({ switchToLogin }) => {
    // State to manage the form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    // State for UI feedback
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handler for input changes
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
            // NOTE: Replace with actual API call to your MarcoHotel/backend
            console.log('Attempting registration with data:', userData);
            
            // Placeholder for axios.post('/api/users/register', userData)
            await new Promise(resolve => setTimeout(resolve, 1500)); 

            setMessage({ type: 'success', text: 'Registration successful! You can now log in.' });
            setLoading(false);
            
            // Optionally clear the form after success
            setFormData({ name: '', email: '', password: '', confirmPassword: '' });
            
            // Optionally switch to the login view after a short delay
            setTimeout(switchToLogin, 2500);

        } catch (error) {
            console.error('Registration failed:', error);
            // Example of handling backend error message
            const errorText = error.response?.data?.message || 'Registration failed. Please try again.';
            setMessage({ type: 'danger', text: errorText });
            setLoading(false);
        }
    };

    return (
        <div className="p-4 p-md-5 bg-white shadow-lg rounded-3">
            <h2 className="text-center text-tropical-primary fw-bold mb-4">
                <BiUser className="me-2" /> Create Your MarcoHotel Account
            </h2>
            
            {message && (
                <div className={`alert alert-${message.type} text-center`}>
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
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

                {/* Email Address */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
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

                {/* Password */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
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

                {/* Confirm Password */}
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
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
                <div className="d-grid gap-2 mb-3">
                    <button type="submit" className="btn btn-primary btn-lg fw-bold" disabled={loading}>
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Registering...
                            </>
                        ) : 'Register Account'}
                    </button>
                </div>

                {/* Switch to Login Link */}
                <p className="text-center mt-3 mb-0">
                    Already have an account? 
                    <button 
                        type="button" 
                        className="btn btn-link text-tropical-primary fw-bold p-0 ms-2"
                        onClick={switchToLogin}
                        disabled={loading}
                    >
                        Login here
                    </button>
                </p>
            </form>
        </div>
    );
};

export default RegisterForm;