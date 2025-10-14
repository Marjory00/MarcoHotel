import React from 'react';
import { BiSolidStar, BiStar } from 'react-icons/bi';

/**
 * Displays a rating using solid and outline star icons.
 * @param {number} rating - The numeric rating (e.g., 4.5).
 * @param {number} totalStars - The total number of stars (default is 5).
 * @param {number} size - The size of the icons (default is 20).
 */
const StarRating = ({ rating, totalStars = 5, size = 20 }) => {
    // Round the rating to the nearest half for display consistency
    const displayRating = Math.round(rating * 2) / 2;

    const stars = Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        
        // Use a solid star if the current star value is less than or equal to the rating
        if (starValue <= displayRating) {
            return <BiSolidStar key={index} className="text-warning" size={size} />;
        } 
        // For simplicity, we only use solid and empty stars. If you need half stars, 
        // you would need to install a dedicated half-star icon package.
        else {
            return <BiStar key={index} className="text-warning" size={size} />;
        }
    });

    return <div className="d-flex align-items-center">{stars}</div>;
};

export default StarRating;