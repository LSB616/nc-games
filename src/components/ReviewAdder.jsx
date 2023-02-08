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

    if (!user.loggedIn) {
        return <LoginPage />
    };

    if (isLoading) {
        return <LoadingPage />;
    };

    if (!submit) {
    return (
        <section className='review-add-page'>
        <img className='add-review-img' src={require('../images/AdobeStock_421558379.jpeg')} alt="" data-image-width="1920" data-image-height="911"></img>
        <div className="review-add-div1">
        <div className="review-add-div2">
        <h2 className="review-add-h2">Submit Review</h2>
        <p className="review-add-p1">Have some thoughts about a game you recently played? Share them with the Northern Board Gamers community below!</p>
        <div className='add-review-form-div'>
        <form  className='add-review-form' onSubmit={handleSubmit}>
            <div className="add-review-title">
                <label htmlFor='review-title' className="add-review-title-label">Title</label>
                <input type="text" id="review-title" placeholder="Enter Review Title" className="add-review-title-input" value={title} onChange={(e) => {setTitle(e.target.value)}} required></input>
            </div>
              <div className="add-review-designer">
                <label htmlFor='designer' className="add-review-designer-label">Game Designer</label>
                <input type="text" id="designer" placeholder="Enter Game Creator Name" className="add-review-designer-input" value={gameDesigner} onChange={(e) => {setGameDesigner(e.target.value)}} required></input>
              </div>
              <div className="add-review-category">
                <label htmlFor='category' className="add-review-category-label">Category</label>
                <select className="add-review-category-dropdown" id="touch" value={category} onChange={(e) => {setCategory(e.target.value)}} required>
                <option disabled="disabled" selected={true} hidden={true}>Category</option>        
                <option value="strategy">Strategy</option>
                <option value="hidden-roles">Hidden Roles</option>
                <option value="dexterity">Dexterity</option>
                <option value="push-your-luck">Push Your Luck</option>
                <option value="roll-and-write">Role and Write</option>
                <option value="deck-building">Deck Building</option>
                <option value="engine-building">Engine Building</option>
                </select>
              </div>
                <div className="add-review-img-url">
                <label htmlFor='review-image-url' className="add-review-img-url-label">Image: </label>
                <input type="text" id="review-image-url" placeholder="Enter Image URL" className="add-review-img-url-input" value={image} onChange={(e) => {setImage(e.target.value)}} required></input>    
                </div>
              <div className="add-review-body">
                <label htmlFor='review-body' className="add-review-body-label">Review: </label>
                <textarea id="review-body" className="add-review-body-input" placeholder="Enter Review" rows="4" cols="50" value={reviewBody} onChange={(e) => {setReviewBody(e.target.value)}} required></textarea>
              </div>
              <div className="add-review-button-div">
                <button type="submit" className="add-review-page-button">Submit</button>
              </div>
            </form>
        </div>
        </div>
        </div>
        </section>
    );
    } else if (submit) {
        return (
            <section className='review-add-page'>
            <img className='add-review-img' src={require('../images/AdobeStock_421558379.jpeg')} alt="" data-image-width="1920" data-image-height="911"></img>
            <div className="review-add-div1">
            <div className="review-add-div2">
            <h2 className='submit-review-h2'>Thank you for submitting your review!</h2>
            <img className='submit-review-logo' src={require('../images/comment-image-1-no-back.png')} alt=""></img>
            <p className='submit-review-p'>Click below to go to your review</p>
            <Link to={`/reviews/${reviewId}`}>
            <button className='add-review-page-button'>Click Here!</button>
            </Link>
            </div>
            </div>
            </section>)
    };
};



export default ReviewAdder;