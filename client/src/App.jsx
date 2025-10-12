// client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Ensure all imports are correct and point to existing files
import Navbar from './components/Navbar.jsx';   // Added .jsx for consistency
import Home from './pages/Home.jsx'; 
import Rooms from './pages/Rooms.jsx'; 
import Booking from './pages/Booking.jsx'; 
import Footer from './components/Footer.jsx'; 

function App() {
  return (
    // Top-level Router component
    <Router>
      <Navbar />
      
      {/* Container holding the main content. paddingBottom prevents fixed footer overlap. */}
      <div className="container mt-4" style={{ paddingBottom: '70px' }}>
        <Routes>
          {/* Main landing page */}
          <Route path="/" element={<Home />} />
          {/* List of rooms page */}
          <Route path="/rooms" element={<Rooms />} />
          {/* Detailed booking page, expects a room ID in the URL */}
          <Route path="/booking/:roomId" element={<Booking />} />
          {/* Fallback route for any path not matched above */}
          <Route path="*" element={<Home />} /> 
        </Routes>
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;