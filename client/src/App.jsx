// client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Booking from './pages/Booking';
import Footer from './components/Footer';

// Main application component
function App() {
  return (
    // Router is needed for navigation across different pages
    <Router>
      {/* Navbar will appear on all pages */}
      <Navbar />
      
      {/* Container to center content and add some padding */}
      <div className="container mt-4">
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Route for the rooms listing page */}
          <Route path="/rooms" element={<Rooms />} />
          {/* Route for the booking page (e.g., /booking/room-id) */}
          <Route path="/booking/:roomId" element={<Booking />} />
        </Routes>
      </div>
      
      {/* Footer will appear on all pages */}
      <Footer />
    </Router>
  );
}

export default App;