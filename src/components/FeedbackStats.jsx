import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)

    //Calculate rating avg
    let average = feedback.reduce((acc, curr) => {
        return acc + curr.rating;
    }, 0) / feedback.length;

    // Only one decimal digit after the dot and if it is an int, drop the zero off
    average = average.toFixed(1).replace(/[.,]0$/, '');

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats