import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";
import { Link } from 'react-router-dom';

const Reviews = () => {
const [isLoading, setIsLoading] = useState(true);
const [reviews, setReviews] = useState([]);
const [sortBy, setSortBy] = useState('');

useEffect(() => {
    setIsLoading(true);
    getReviews(sortBy).then(({ reviews }) => {
        setReviews(reviews);
        setIsLoading(false);
    });
}, [sortBy]);

if (isLoading) {
    return <p className="Loading">Loading...</p>;
};

return (
<section class="cards-wrapper">
<section>
    <select className="sortby-dropdown" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
    <option value="title">Title</option>
    <option value="owner">Reviewer</option>
    <option value="category">Category</option>
    <option value="designer">Designer</option>
    <option value="votes">Likes</option>
    <option value="created_at">Date</option>
    <option value="comment_count">Comment Count</option>
    </select>
</section>
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