import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";
import { Link, useParams, useSearchParams } from 'react-router-dom';

const Reviews = () => {
const [isLoading, setIsLoading] = useState(true);
const [reviews, setReviews] = useState([]);
const [category, setCategory] = useSearchParams();
const categoryType = category.get('category')

useEffect(() => {
    setIsLoading(true);
    getReviews(categoryType).then(({ reviews }) => {
        setReviews(reviews);
        setIsLoading(false);
    });
}, [categoryType]);

if (isLoading) {
    return <p className="Loading">Loading...</p>;
};

return (
<section class="cards-wrapper">
{reviews.map((review) => { 
return  <div class="card-grid-space" key={review.review_id}>
        <Link to={`/reviews/${review.review_id}`} className="card-link">
        <a class="card" style={{"--bg-img": `url(${review.review_img_url})`}}>
        <div>
        <h1>{review.title}</h1>
        <p>{review.owner}</p>
        <div class="date">{review.created_at.slice(0, 10)}</div>
        <div class="tags">
        <div class="tag">{review.category}</div>
        </div>
        </div>
        </a>
        </Link>
        </div>
})}
</section>
);
};

export default Reviews;