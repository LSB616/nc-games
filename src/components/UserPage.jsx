import { UserContext } from '../contexts/User';
import { useContext, useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { Link } from 'react-router-dom';
import LoadingPage from "./LoadingPage";

const UserPage = () => {
    const { user, setUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    let filteredReviews = reviews.filter((review) => review.owner === user.username)


    useEffect(() => {
        setIsLoading(true);
        getReviews().then(({ reviews }) => {
            setReviews(reviews);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <LoadingPage />;
    };

    return (
    <div className='userpage'>
    <section className='userdetails'> 
    <h2>Hello There! {user.username}</h2>
    <img src={user.avatar_url} alt="user profile image"></img>
    </section>
    <h3>Your Reviews</h3>
    <section className="cards-wrapper">
    {filteredReviews.map((review) => { 
    return  <div className="card-grid-space" key={review.review_id}>
        <Link to={`/reviews/${review.review_id}`} className="card-link">
        <div className="card" style={{"--bg-img": `url(${review.review_img_url})`}}>
        <div>
        <h1>{review.title}</h1>
        <p>{review.owner}</p>
        <div className="date">{review.created_at.slice(0, 10)}</div>
        <div className="tags">
        <div className="tag">{review.category}</div>
        </div>
        </div>
        </div>
        </Link>
        </div>
        })}
    </section>
    </div>
    );
};

export default UserPage;