import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";
import { Link, useSearchParams } from 'react-router-dom';

const Reviews = () => {
const [isLoading, setIsLoading] = useState(true);
const [reviews, setReviews] = useState([]);
const [sortByParams, setSortByParams] = useSearchParams('');
const sortbyQuery = sortByParams.get('sort_by');

useEffect(() => {
    setIsLoading(true);
    getReviews(sortByParams).then(({ reviews }) => {
        setReviews(reviews);
        setIsLoading(false);
    });
}, [sortByParams]);

if (isLoading) {
    return <p className="Loading">Loading...</p>;
};

return (
<section class="cards-wrapper">
<section>
    <select className="sortby-dropdown" value={sortByParams} onChange={(e) => setSortByParams(e.target.value)}>
    <option value="sort_by=title">Title</option>
    <option value="sort_by=owner">Reviewer</option>
    <option value="sort_by=category">Category</option>
    <option value="sort_by=designer">Designer</option>
    <option value="sort_by=votes">Likes</option>
    <option value="sort_by=created_at">Date</option>
    <option value="sort_by=comment_count">Comment Count</option>
    </select>
</section>
{reviews.map((review) => { 
return  <div className="card-grid-space" key={review.review_id}>
        <Link to={`/reviews/${review.review_id}`} className="card-link">
        <a className="card" style={{"--bg-img": `url(${review.review_img_url})`}}>
        <div>
        <h1>{review.title}</h1>
        <p>{review.owner}</p>
        <div className="date">{review.created_at.slice(0, 10)}</div>
        <div className="tags">
        <div className="tag">{review.category}</div>
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