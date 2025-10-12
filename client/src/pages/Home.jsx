// client/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Home Page component with a Bootstrap Jumbotron/Hero section
const Home = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 shadow">
      <div className="container-fluid py-5 text-center">
        {/* Main title */}
        <h1 className="display-4 fw-bold">Welcome to MarcoHotel</h1>
        
        {/* Subtitle/Slogan */}
        <p className="fs-5 mt-3">
          Your home away from home. Experience luxury and comfort tailored to your needs.
        </p>
        
        {/* Call to action button */}
        <Link className="btn btn-primary btn-lg mt-4" to="/rooms" role="button">
          Explore Our Rooms
        </Link>
      </div>
    </div>
  );
};

export default Home;