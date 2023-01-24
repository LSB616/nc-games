import { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getReview, deleteReview } from "../utils/api";
import { UserContext } from '../contexts/User';
import Votes from "./Votes";
import Comments from "./Comments"
import LoadingPage from "./LoadingPage";
import Reviews from "./Reviews";



const Review = () => {
const { user } = useContext(UserContext);
const [isLoading, setIsLoading] = useState();
const [reviewDeleted, setReviewDeleted] = useState();
const [review, setReview] = useState('');
const { review_id } = useParams();
const [sameOwner, setSameOwner] = useState();



useEffect(() => {
    setIsLoading(true);
    setSameOwner(false);
    getReview(review_id).then(({ review }) => {
        setIsLoading(false);
        setReviewDeleted(false);
        if(user.loggedIn && user.username === review.owner){
            setSameOwner(true);
        }
        setReview(review);
    }).catch(() => {
        console.log('something went wrong in review');
    });
}, [review_id, user.loggedIn, user.username]);


const deleteContent = (e) => {
    e.preventDefault();
    return deleteReview(review_id)
    .then(() => {
        setReviewDeleted(true);
    })
    .catch((err) => {
        console.error(err);
    })
};

if (isLoading) {
    return <LoadingPage />;
};

if (reviewDeleted) {
    return <Reviews />;
};

if (sameOwner) {
    return (
        <section className="review">
        <div className="review-top">
        <h2 className="review_title">{review.title}</h2>
        <div className="review_p">
        <p>Category: {review.category}</p>
        <p>Designer: {review.designer}</p>  
        <p>Reviewer: {review.owner}</p>
        </div>
        <button id="delete" className="delete-review-button" value="" onClick={deleteContent}>Delete Review</button>
        <Link to={`/reviews/${review_id}/edit-review`}>
        <button className="delete-review-button">Edit Review</button>
        </Link>
        <div className="review_votes">
        <Votes votes ={review.votes} review_id={review_id} />
        </div>
        </div>
        <div className="review-bottom">
        <p className="review_body">{review.review_body}</p>
        <img src={`${review.review_img_url}`} className="review_img" alt="Board Game"></img>
        <div className="comments">
        <Comments review_id={review_id} />
        </div>
        </div>
        </section>
    );
};


return (
    <section className="review">
    <div className="review-top">
    <h2 className="review_title">{review.title}</h2>
    <div className="review_p">
    <p>Category: {review.category}</p>
    <p>Designer: {review.designer}</p>  
    <p>Reviewer: {review.owner}</p>
    </div>
    <div className="review_votes">
    <Votes votes ={review.votes} review_id={review_id} />
    </div>
    </div>
    <div className="review-bottom">
    <p className="review_body">{review.review_body}</p>
    <img src={`${review.review_img_url}`} className="review_img" alt="Board Game"></img>
    <div className="comments">
    <Comments review_id={review_id} />
    </div>
    </div>
    </section>
)
};

export default Review;