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
    <div classname="user">
    <h2>Hello There! {user.username}</h2>
    <img className="user-profile-img" src={user.avatar_url} alt="user profile image"></img>
    </div>
    </section>
    <div className="user-page-add-review">
    <Link to="/reviews/add-review">
    <button>Add Review</button>
    </Link>
    </div>
    <h3>Your Reviews</h3>
    <section>
    <div class="grid">
    <ul id="hexGrid">
    {filteredReviews.map((review) => { 
    return  <li class="hex">
    <Link to={`/reviews/${review.review_id}`}>
    <div class="hexIn">
    <div class="hexLink" href="#">
    <div class='img' style={{'background-image': `url(${review.review_img_url})`}}></div>
    <h1 id="demo1">{review.title}</h1>
    <p id="demo2">{review.category}</p>
    <p id="demo3">{review.created_at.slice(0, 10)}</p>
    <p id="demo4">{review.owner}</p>
    </div>
    </div>
    </Link>
    </li>
        })}
    </ul>
    </div>
    </section>
    </div>
    );
};

export default UserPage;