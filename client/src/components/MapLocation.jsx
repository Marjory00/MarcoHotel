
// MarcoHotel/client/src/components/MapLocation.jsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';

// Fix for default marker icon not showing up in React Leaflet
// It replaces the default leaflet image icons with a placeholder or simple div
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Coordinates for Marco Island, FL (a central point)
const MARCO_ISLAND_COORDS = [25.9380, -81.7259]; 
const HOTEL_NAME = "MarcoHotel Beach Resort";
const HOTEL_ADDRESS = "560 S Collier Blvd, Marco Island, FL 34145";


const MapLocation = () => {
  return (
    <div className="map-container-wrapper shadow-lg rounded-3 mb-5 p-4 bg-white">
      
      <h2 className="text-tropical-primary fw-bold mb-4">
        <FaMapMarkerAlt className="me-2" /> Find Us
      </h2>

      {/* Map Container - MUST have a defined height in CSS to display */}
      <MapContainer 
        center={MARCO_ISLAND_COORDS} 
        zoom={13} 
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%", borderRadius: "8px" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marker for the Hotel Location */}
        <Marker position={MARCO_ISLAND_COORDS} icon={customIcon}>
          <Popup>
            <div className='fw-bold'>{HOTEL_NAME}</div>
            <div className='small text-muted'>{HOTEL_ADDRESS}</div>
            <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOTEL_ADDRESS)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className='btn btn-sm btn-info mt-2 text-white'
            >
                Get Directions
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapLocation;