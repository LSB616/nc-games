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
            <div className="grid">
            <ul id="hexGrid">
            <li className="hex-home">
            <Link to='/reviews'>
            <div className="hexIn">
            <div className="hexLink">
            <div className='img-2' style={{'backgroundImage': `url(https://i.pinimg.com/564x/a2/93/17/a29317052b668a8f2d0d42634e47b2f1.jpg)`}}></div>
            <h2 id="demo6">Reviews</h2>
            </div>
            </div>
            </Link>
            </li>
            <li className="hex-home">
            <Link to='/categories'>
            <div className="hexIn">
            <div className="hexLink">
            <div className='img-2' style={{'backgroundImage': `url(https://i.pinimg.com/564x/53/f8/77/53f8778dbcca2d980f5cd37e586e2689.jpg)`}}></div>
            <h2 id="demo6">Categories</h2>
            </div>
            </div>
            </Link>
            </li>
            </ul>
            </div>
            </div>
            </div>
        </div>
    );
};