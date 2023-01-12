import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";
import { Link, useSearchParams } from 'react-router-dom';

const Reviews = () => {
const [isLoading, setIsLoading] = useState(true);
const [reviews, setReviews] = useState([]);
const [sortByParams, setSortByParams] = useSearchParams('');
const sortbyQuery = sortByParams.get('sort_by');
const [sortBy, setSortBy] = useState('category')
const [orderBy, setOrderBy] = useState(null)



useEffect(() => {
    setIsLoading(true);
    getReviews(sortbyQuery).then(({ reviews }) => {
        setReviews(reviews);
        setIsLoading(false);
    });
}, [sortBy]);

if (isLoading) {
    return <p className="Loading">Loading...</p>;
};

return (
<div>
<section>
    <select className="sortby-dropdown" value={sortByParams} onChange={(e) => {
        setSortBy(e.target.value.split('=')[1])
        setSortByParams(e.target.value)
        }}>
    <option value="sort_by=title">Title</option>
    <option value="sort_by=owner">Reviewer</option>
    <option value="sort_by=category">Category</option>
    <option value="sort_by=designer">Designer</option>
    <option value="sort_by=created_at">Date</option>
    </select>
    <select className="orderby-dropdown" value={orderBy} onChange={(e) => {
        setOrderBy(e.target.value)
    }}>
    <option value="order=asc">Ascending</option>
    <option value="order=desc">Descending</option>
    </select>
</section>
<section class="cards-wrapper">
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
</div>
);
};

export default Reviews;