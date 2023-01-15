import { UserContext } from '../contexts/User';
import { useContext, useEffect, useState } from "react";
import { postReview } from '../utils/api';

const ReviewAdder = () => {
    const { user } = useContext(UserContext);
    const [review, setReview] = useState({});

    const newReview = {
        title: '', 
        designer: '', 
        category: '', 
        review_body: '',
        review_img_url: '',
        owner: '',
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        newReview.owner = user.username;
        setReview(newReview);
        return postReview(review)
        .catch((err) => {
            console.error(err);
        })
    };


    return (
        <form className='add-review-form' onSubmit={handleSubmit}>
            <label htmlFor='review-title'>Title: </label>
            <input type="text" id="review-title" value={newReview.title} onChange={(e) => {newReview.title = e.target.value}} required></input>
            <label htmlFor='designer'>Game Designer: </label>
            <input type="text" id="designer" value={newReview.designer} onChange={(e) => {newReview.designer = e.target.value}} required></input>
            <label htmlFor='review-body'>Review: </label>
            <textarea id="review-body" className="review-textarea" rows="40" cols="50" value={review.body} onChange={(e) => {newReview.body = e.target.value}} required></textarea>
            <label htmlFor='category'>Category: </label>
            <select className="category-dropdown" value={newReview.category} onChange={(e) => {newReview.category = e.target.value}} required>
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
            <input type="text" id="review-image-url" value={review.review_img_url} onChange={(e) => {newReview.review_img_url = e.target.value}} required></input>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ReviewAdder;