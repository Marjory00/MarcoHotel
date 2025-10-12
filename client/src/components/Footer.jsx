
// client/src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        // The fixed-bottom class from Bootstrap will pin the footer to the viewport bottom
        <footer className="footer mt-auto py-3 bg-dark fixed-bottom">
            <div className="container text-center">
                <span className="text-light">
                    © {new Date().getFullYear()} **MarcoHotel**. All rights reserved.
                </span>
                <p className="mb-0">
                    <a href="/privacy" className="text-info small mx-2">Privacy Policy</a> | 
                    <a href="/terms" className="text-info small mx-2">Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;