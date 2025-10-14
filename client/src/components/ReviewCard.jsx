import React from 'react';
import StarRating from './StarRating';
import { BiCalendar } from 'react-icons/bi';

/**
 * Displays a single, styled user review.
 * @param {Object} review - The review data object.
 * @param {string} review.reviewerName - Name of the person who wrote the review.
 * @param {string} review.date - The date the review was posted (e.g., "YYYY-MM-DD").
 * @param {number} review.rating - The star rating (e.g., 4.8).
 * @param {string} review.comment - The review text.
 */
const ReviewCard = ({ review }) => {
    const { reviewerName, date, rating, comment } = review;

    // Helper to format the date nicely
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        // tropical-card class is assumed to provide custom hotel styling
        <div className="card tropical-card border-0 shadow-lg h-100"> 
            <div className="card-body">
                {/* Reviewer Name and Rating */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title text-tropical-dark mb-0 fw-bold">{reviewerName}</h5>
                    {/* Render the star rating */}
                    <StarRating rating={rating} size={22} /> 
                </div>

                {/* Comment */}
                <p className="card-text text-muted fst-italic">
                    "{comment}"
                </p>

                {/* Date and Rating value */}
                <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                    <small className="text-muted">
                        <BiCalendar className="me-1" size={14} /> {formattedDate}
                    </small>
                    <small className='text-warning fw-bold'>{rating} / 5.0</small>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;