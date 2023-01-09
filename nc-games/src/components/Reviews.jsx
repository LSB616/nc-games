import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";

const Reviews = () => {
const [isLoading, setIsLoading] = useState(true);
const [reviews, setReviews] = useState([]);

useEffect(() => {
    setIsLoading(true);
    getReviews().then(({ reviews }) => {
        setReviews(reviews);
        setIsLoading(false);
    });
}, []);

if (isLoading) {
    return <p className="Loading">Loading...</p>;
};

return (
<ul className="Review-List">
{reviews.map((review) => {
return  <li className="Review-Card" key={review.review_id}>
        <img src={review.review_img_url} className="Review-Image"></img>
        <p>{review.title}</p>
        <p>{review.owner}</p>
        </li>
})}
</ul>
);
};

export default Reviews;