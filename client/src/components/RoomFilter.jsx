// MarcoHotel/client/src/components/RoomFilter.jsx

import React, { useState, useRef } from 'react'; // Added useRef for debounce cleanup
import { IoSearchOutline, IoFilterOutline } from 'react-icons/io5';

/**
 * Filter and Search component for the Rooms page.
 * It communicates user input via the onFilterChange prop.
 */
const RoomFilter = ({ onFilterChange }) => {
    // State to hold the current values of the search bar and the filter dropdown
    const [searchTerm, setSearchTerm] = useState('');
    // Initialize roomType as an empty string ('') which typically means 'All' to the API
    const [roomType, setRoomType] = useState(''); 
    
    // Ref to manage the debounce timer, cleaner than using window object
    const debounceRef = useRef(null);

    const roomTypes = ['All', 'Single', 'Double', 'Suite', 'Deluxe'];

    // Central function to trigger the API call via the parent prop
    const triggerFilterChange = (search, type) => {
        onFilterChange({ search, roomType: type });
    };

    // Handle search input change (with debouncing)
    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        // Clear previous timeout
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }
        
        // Set new timeout to call the filter change function
        debounceRef.current = setTimeout(() => {
            // Pass the new search term and the current roomType back to the parent
            triggerFilterChange(term, roomType);
        }, 300); // Debounce time in ms
    };

    // Handle room type filter change
    const handleTypeChange = (e) => {
        // 'All' is a display value, the backend expects an empty string ('') to return all rooms
        const newType = e.target.value === 'All' ? '' : e.target.value;
        setRoomType(newType);
        
        // Immediately trigger API call for dropdown changes
        triggerFilterChange(searchTerm, newType);
    };

    return (
        <div className="bg-white p-4 rounded shadow-sm mb-4">
            <div className="row g-3 align-items-center">
                
                {/* Search Input */}
                <div className="col-md-7 col-lg-8">
                    <div className="input-group input-group-lg">
                        <span className="input-group-text bg-white text-tropical-primary border-tropical-primary">
                            <IoSearchOutline className="fs-5" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search rooms by name, description, or features"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>

                {/* Room Type Filter */}
                <div className="col-md-5 col-lg-4">
                    <div className="input-group input-group-lg">
                        <span className="input-group-text bg-white text-tropical-primary border-tropical-primary">
                            <IoFilterOutline className="fs-5" />
                        </span>
                        <select
                            className="form-select"
                            // Use roomType for value, which is '' for 'All'
                            value={roomType || 'All'} 
                            onChange={handleTypeChange}
                        >
                            {roomTypes.map((type) => (
                                <option key={type} value={type}>
                                    {/* FIX: Simplified option text for cleaner UI */}
                                    {type} {type !== 'All' ? 'Room' : 'Rooms'}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RoomFilter;