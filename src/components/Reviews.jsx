import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";
import { Link, useParams, useSearchParams } from 'react-router-dom';

const Reviews = () => {
const [isLoading, setIsLoading] = useState(true);
const [reviews, setReviews] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();
const sortbyQuery = searchParams.get('sort_by');
const orderQuery = searchParams.get('order');


useEffect(() => {
    setIsLoading(true);
    getReviews(sortbyQuery, orderQuery).then(({ reviews }) => {
        setReviews(reviews);
        setIsLoading(false);
    });
}, [sortbyQuery, orderQuery]);

if (isLoading) {
    return <p className="Loading">Loading...</p>;
};

const setSearch = (sort_by, order) => {
    const newParams = new URLSearchParams(searchParams);
    if (sort_by) {newParams.set('sort_by', sort_by)};
    if(order) {newParams.set('order', order)};
    setSearchParams(newParams);
  };


return (
<div>
<section>
    <select className="sortby-dropdown" value={sortbyQuery} onChange={(e) => {
        setSearch(e.target.value, null)
        }}>
    <option disabled="disabled" selected={true} hidden={true}>Sort By</option>        
    <option value="title">Title</option>
    <option value="owner">Reviewer</option>
    <option value="category">Category</option>
    <option value="designer">Designer</option>
    <option value="created_at">Date</option>
    </select>
    <select className="orderby-dropdown" value={orderQuery} onChange={(e) => {
        setSearch(null, e.target.value)
    }}>
    <option disabled="disabled" selected={true} hidden={true}>Order</option> 
    <option value="asc">Ascending</option>
    <option value="desc">Descending</option>
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