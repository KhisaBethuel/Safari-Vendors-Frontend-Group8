import React, {useState} from "react";

const ReviewPage = ({productId, handleSubmitReview}) => {
    const [rating, setRating] = useState(1);
    const [reviewText, setReviewText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSubmitReview(productId, {rating, reviewText});
        setRating(1);
        setReviewText("");

    };
    
    return(
        <div className="review-page">
            <h2>Rate and Review Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Rating:</label>
                    <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        >

{[1, 2, 3, 4, 5].map((star) => (
                            <option key={star} value={star}>
                                {star} Star{star > 1 ? "s" : ""}
                            </option>
                        ))}
                    </select>
                    </div>
                <div>
                    <label>Review:</label>
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Review</button>


            </form>

        </div>
    );
};
export default ReviewPage;