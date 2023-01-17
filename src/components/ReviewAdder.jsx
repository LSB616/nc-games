import { UserContext } from '../contexts/User';
import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { postReview } from '../utils/api';
import LoadingPage from "./LoadingPage";
import LoginPage from './LoginPage';

const ReviewAdder = () => {
    const { user } = useContext(UserContext);
    const [title, setTitle] = useState();
    const [gameDesigner, setGameDesigner] = useState();
    const [reviewBody, setReviewBody] = useState();
    const [category, setCategory] = useState();
    const [image, setImage] = useState();
    const [isLoading, setIsLoading] = useState();
    const [reviewId, setReviewId] = useState();
    const [submit, setSubmit] = useState();

    useEffect(() => {
        setIsLoading(false)
        setSubmit(false)
        setReviewId('')
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        return postReview(user.username, title, gameDesigner, reviewBody, category, image)
        .then((res) => {
            setReviewId(res.review.review_id)
        })
        .then(() => {
            setSubmit(true);
        })
        .catch((err) => {
            console.error(err);
        })
    };

    if (!user) {
        return <LoginPage />
    };

    if (isLoading) {
        return <LoadingPage />;
    };

    if (!submit) {
    return (
        <form className='add-review-form' onSubmit={handleSubmit}>
            <label htmlFor='review-title'>Title: </label>
            <input type="text" id="review-title" value={title} onChange={(e) => {setTitle(e.target.value)}} required></input>
            <label htmlFor='designer'>Game Designer: </label>
            <input type="text" id="designer" value={gameDesigner} onChange={(e) => {setGameDesigner(e.target.value)}} required></input>
            <label htmlFor='review-body'>Review: </label>
            <textarea id="review-body" className="review-textarea" rows="40" cols="50" value={reviewBody} onChange={(e) => {setReviewBody(e.target.value)}} required></textarea>
            <label htmlFor='category'>Category: </label>
            <select className="category-dropdown" value={category} onChange={(e) => {setCategory(e.target.value)}} required>
            <option disabled="disabled" selected={true} hidden={true}>Category</option>        
            <option value="strategy">Strategy</option>
            <option value="hidden-roles">Hidden Roles</option>
            <option value="dexterity">Dexterity</option>
            <option value="push-your-luck">Push Your Luck</option>
            <option value="roll-and-write">Role and Write</option>
            <option value="deck-building">Deck Building</option>
            <option value="engine-building">Engine Building</option>
            </select>
            <label htmlFor='review-image-url'>Image: </label>
            <input type="text" id="review-image-url" value={image} onChange={(e) => {setImage(e.target.value)}} required></input>
            <button type="submit">Submit</button>
        </form>
    );
    } else if (submit) {
        return (
            <div className='review-success'>
            <h2>Thank you for submitting your review!</h2>
            <p>Click below to go to your review</p>
            <Link to={`/reviews/${reviewId}`}>
            <button>Click Here!</button>
            </Link>
            </div>)
    };
};

export default ReviewAdder;