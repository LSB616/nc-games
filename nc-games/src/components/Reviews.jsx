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
<section class="cards-wrapper">
{reviews.map((review) => { 
return  <div class="card-grid-space" key={review.review_id}>
        <a class="card" href={`/reviews/${review.review_id}`} style={{"--bg-img": `url(${review.review_img_url})`}}>
        <div>
        <h1>{review.title}</h1>
        <p>{review.owner}</p>
        <div class="date">{review.created_at.slice(0, 10)}</div>
        <div class="tags">
        <div class="tag">{review.category}</div>
        </div>
        </div>
        </a>
        </div>
})}
</section>
);
};

export default Reviews;