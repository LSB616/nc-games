import { Link } from 'react-router-dom'

export function HomePage () {
    return (
        <div className="homepage-container">
            <div className="row">
            <div className="col">
            <h1 className="title">Northern Board Gamers</h1>
            <h2 className="subtitle">Welcome To Northern Board Gamers!</h2> 
            <p className="blurb">Thanks for dropping in! Northen Board Gamers is the place to find honest to the point reviews on all the most recent and classic Board Games, Card games, and Tabletop Games. The reviews are informative and the community is welcoming. So, if you like what you see, create an account and get involved! Or feel free to take a little look around ...</p>
            </div>
            <div className="col">
                <Link to='/reviews'>
                <div className="homepage-card no1">
                    <h4>Reviews</h4>
                </div>
                </Link>
                <Link to='/categories'>
                <div className="homepage-card no2">
                    <h4>Categories</h4>
                </div>
                </Link>
                {/* <div class="grid">
                <ul id="hexGrid">
                <li class="hex">
                <Link to='/reviews'>
                <div class="hexIn">
                <div class="hexLink" href="#">
                <div className='no1'></div>
                <h1 id="demo1">Reviews</h1>
                </div>
                </div>
                </Link>
                </li>
                <li class="hex">
                <Link to='/categories'>
                <div class="hexIn">
                <div class="hexLink" href="#">
                <div className='no2'></div>
                <h1 id="demo1">Categories</h1>
                </div>
                </div>
                </Link>
                </li>
                </ul>
                 </div> */}
            </div>
            </div>
        </div>
    );
};

{/* <a href="https://boardgame-reviews.onrender.com/api/reviews">Reviews</a>
<a href="https://boardgame-reviews.onrender.com/api/categories">Categories</a> */}