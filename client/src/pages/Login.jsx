import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    // State to hold form data
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Placeholder function for handling form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // --- Placeholder Logic ---
        console.log('Attempting login with:', { email, password });
        // In a real app, you would send this data to your MarcoHotel/backend (server)
        // using a service like Axios here.
        alert(`Login attempted for: ${email}`);
        // -------------------------
    };

    return (
        <div className="py-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="p-4 border rounded shadow-lg tropical-card bg-white">
                        <h1 className="text-center mb-4 display-5">Sign In to MarcoHotel</h1>
                        
                        <form onSubmit={handleSubmit}>
                            {/* Email Field */}
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div className="mb-4">
                                <label htmlFor="passwordInput" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="passwordInput"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary btn-lg fw-bold">
                                    Login
                                </button>
                            </div>
                        </form>
                        
                        <hr className="my-4" />

                        {/* Register Link */}
                        <p className="text-center mb-0">
                            Don't have an account? 
                            {/* Link needs a Register component/page, assuming you'll add /register soon */}
                            <Link to="/register" className="ms-2">Register Now</Link> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;