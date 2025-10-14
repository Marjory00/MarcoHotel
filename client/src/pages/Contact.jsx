
import React from 'react';

const Contact = () => {
    return (
        <div className="py-5">
            <h1 className="display-4 text-center mb-4">Contact Us</h1>
            <p className="lead text-center text-muted mb-5">We'd love to hear from you. Reach out via the form or contact details below.</p>
            
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    {/* Placeholder Contact Form */}
                    <div className="p-4 border rounded shadow-lg bg-white mb-4 tropical-card">
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

                    {/* Contact Details */}
                    <div className="row text-center mt-5">
                        <div className="col-md-6 mb-3">
                            <h4>Phone</h4>
                            <p className="lead">+1 (555) 123-4567</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <h4>Email</h4>
                            <p className="lead">reservations@marcohotelexample.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;