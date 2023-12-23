import React, { useState } from 'react';
import '../stylesheet/Starability.css';
import {useNavigate} from "react-router-dom"; // Add your CSS file path here
import map from "./Map";
const StarRating = () => {
    const [rating, setRating] = useState(0); // State to manage the selected rating
    const navigation = useNavigate();
    const handleRatingChange = (e) => {
        setRating(parseInt(e.target.value)); // Update the rating state when a star is clicked
    };
    const HandleSubmit =() => {

       navigation('/map')
    }

    return (
        <form id="review">
            <fieldset className="starability-basic">
                <legend>Please leave review:</legend>
                <input
                    type="radio"
                    id="no-rate"
                    className="input-no-rate"
                    name="rating"
                    value="0"
                    checked={rating === 0}
                    onChange={handleRatingChange}
                    aria-label="No rating."
                />

                {[1, 2, 3, 4, 5].map((value) => (
                    <React.Fragment key={value}>
                        <input
                            type="radio"
                            id={`rate${value}`}
                            name="rating"
                            value={value}
                            checked={rating === value}
                            onChange={handleRatingChange}
                        />
                        <label htmlFor={`rate${value}`}>{`${value} star${value !== 1 ? 's' : ''}.`}</label>
                    </React.Fragment>
                ))}

                <span className="starability-focus-ring"></span>
            </fieldset>
            <button className="saveReviewButton" onClick={HandleSubmit}>Save the review</button>
        </form>
    );
};

export default StarRating;
