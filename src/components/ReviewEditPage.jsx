import { UserContext } from '../contexts/User';
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom'
import { getReview, deleteReview } from "../utils/api";
import LoadingPage from "./LoadingPage";
import { patchReviewForUpdate } from '../utils/api';

const ReviewEditPage = () => {
    const { user } = useContext(UserContext);
    const { review_id } = useParams();
    const [title, setTitle] = useState();
    const [gameDesigner, setGameDesigner] = useState();
    const [reviewBody, setReviewBody] = useState();
    const [category, setCategory] = useState();
    const [image, setImage] = useState();
    const [isLoading, setIsLoading] = useState();
    const [submit, setSubmit] = useState();

    useEffect(() => {
        setIsLoading(false)
        setSubmit(false)
        getReview(review_id).then((res) => {
            setTitle(res.review.title)
            setGameDesigner(res.review.designer)
            setReviewBody(res.review.review_body)
            setCategory(res.review.category)
            setImage(res.review.review_img_url)
        })
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();
        patchReviewForUpdate(review_id, {title: title, designer: gameDesigner, review_body: reviewBody, category: category, review_img_url: image})
        .then(() => {
            setSubmit(true);
        })
        .catch((err) => {
            console.error(err);
        })
    };

    if (isLoading) {
        return <LoadingPage />;
    };

    if (!submit) {
    return (
    <form className='add-review-form' onSubmit={handleSubmit}>
    <label htmlFor='review-title'>Title: </label>
    <input type="text" id="review-title" defaultValue={title} value={title} onChange={(e) => {setTitle(e.target.value)}} required></input>
    <label htmlFor='designer'>Game Designer: </label>
    <input type="text" id="designer" defaultValue={gameDesigner} value={gameDesigner} onChange={(e) => {setGameDesigner(e.target.value)}} required></input>
    <label htmlFor='review-body'>Review: </label>
    <textarea id="review-body" className="review-textarea" rows="40" cols="50" defaultValue={reviewBody} value={reviewBody} onChange={(e) => {setReviewBody(e.target.value)}} required></textarea>
    <label htmlFor='category'>Category: </label>
    <select className="category-dropdown" defaultValue={category} value={category} onChange={(e) => {setCategory(e.target.value)}} required>
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
    <input type="text" id="review-image-url" defaultValue={image} value={image} onChange={(e) => {setImage(e.target.value)}} required></input>
    <button type="submit">Submit</button>
</form>
    )
    } else if (submit) {
        return (
            <div className='review-update'>
            <h2>Thank you for updating your review!</h2>
            <p>Click below to go to your updated review.</p>
            <Link to={`/reviews/${review_id}`}>
            <button>Click Here!</button>
            </Link>
            </div>)
    }
};

export default ReviewEditPage;