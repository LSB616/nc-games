import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../utils/api";
import Votes from "./Votes";
import Comments from "./Comments"


const Review = () => {
const [isLoading, setIsLoading] = useState(true);
const [review, setReview] = useState('');
const { review_id } = useParams()

useEffect(() => {
    setIsLoading(true);
    getReview(review_id).then(({ review }) => {
        setReview(review);
        setIsLoading(false);
    });
}, [review_id]);


if (isLoading) {
    return <p className="Loading">Loading...</p>;
};

return (
    <div className="review">
    <img src={`${review.review_img_url}`} className="review_img" alt="Image Associated with Board Game"></img>
    <h2 className="review_title">{review.title}</h2>
    <div className="review_details">
    <p>Category: {review.category}</p>
    <p>Designer: {review.designer}</p>  
    <p>Reviewer: {review.owner}</p>
    </div>
    <Votes votes ={review.votes} review_id={review_id}/>
    <p className="review_body">{review.review_body}</p>
    <Comments review_id={review_id}/>
    </div>
)
};

export default Review;