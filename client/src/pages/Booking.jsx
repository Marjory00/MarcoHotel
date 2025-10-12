
// client/src/pages/Booking.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    // useParams pulls the room ID from the URL path defined in App.jsx
    const { roomId } = useParams();

    return (
        <div className="text-center my-5 p-5 border rounded shadow-sm bg-light">
            <h1 className="display-4 text-primary">Reserve Your Room</h1>
            <p className="lead mt-3">
                You are currently viewing the booking page for: 
                <code className="text-danger fw-bold ms-2">Room ID: {roomId}</code>.
            </p>
            <hr className="my-4" />
            <p>
                This section will contain the full booking form, date pickers, and payment integration.
            </p>
            <button className="btn btn-success btn-lg mt-3" disabled>
                Proceed to Checkout (Placeholder)
            </button>
        </div>
    );
};

export default Booking;