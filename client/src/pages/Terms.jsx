import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className="py-5">
            <h1 className="display-4 mb-4 text-tropical-dark">Terms & Conditions of Service</h1>
            <p className="lead text-muted">
                Welcome to MarcoHotel Paradise. These terms and conditions outline the rules and regulations for the use of MarcoHotel's Website and booking services.
            </p>

            <h2 className="mt-5 mb-3">1. Agreement to Terms</h2>
            <p>
                By accessing and using this website and making any reservation, you accept and agree to be bound by these Terms and Conditions. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="mt-5 mb-3">2. Reservation and Payment</h2>
            <ul>
                <li>
                    **Booking Confirmation:** All reservations are subject to availability and confirmation. A booking confirmation will be sent to your email upon successful payment.
                </li>
                <li>
                    **Payment:** Full payment or a specified deposit is required at the time of booking, as indicated on the reservation page. We accept major credit/debit cards.
                </li>
                <li>
                    **Rates:** Rates are subject to change without notice but will be confirmed at the time of booking.
                </li>
            </ul>

            <h2 className="mt-5 mb-3">3. Cancellations and Refunds</h2>
            <p>
                The cancellation policy varies depending on the room type and rate selected. Specific cancellation terms will be detailed during the booking process. Generally:
            </p>
            <ul>
                <li>
                    **Standard Rate:** Cancellations made 7 days or more before the check-in date receive a full refund.
                </li>
                <li>
                    **Non-Refundable Rate:** These rates are non-refundable and non-transferable.
                </li>
            </ul>
            <p className="text-danger">
                *Note: All refunds are subject to a processing fee.*
            </p>

            <h2 className="mt-5 mb-3">4. Guest Obligations</h2>
            <ul>
                <li>Guests must be at least 18 years old to make a reservation.</li>
                <li>Guests agree to respect the property, staff, and other guests. Damage to the property may result in additional charges.</li>
                <li>Check-in time is 3:00 PM, and check-out time is 11:00 AM.</li>
            </ul>

            <h2 className="mt-5 mb-3">5. Limitation of Liability</h2>
            <p>
                MarcoHotel Paradise will not be liable for any damages or losses arising from your use of the website or from your stay at the hotel, except in cases of negligence by the hotel or its staff.
            </p>
            
            <p className="mt-4">
                For detailed information regarding data handling, please review our full <Link to="/privacy">Privacy Policy</Link>.
            </p>
        </div>
    );
};

export default Terms;