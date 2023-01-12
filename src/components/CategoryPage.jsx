import { Link } from 'react-router-dom'

const CategoryPage = () => {
return (
    <div className="col">
        <Link to='/reviews?category=strategy'>
        <div className="homepage-card no1">
            <h4>Strategy</h4>
        </div>
        </Link>
        <Link to='/reviews?category=hidden-roles'>
        <div className="homepage-card no2">
            <h4>Hidden Roles</h4>
        </div>
        </Link>
        <Link to='/reviews?category=dexterity'>
        <div className="homepage-card no1">
            <h4>Dexterity</h4>
        </div>
        </Link>
        <Link to='/reviews?category=push-your-luck'>
        <div className="homepage-card no2">
            <h4>Push Your Luck</h4>
        </div>
        </Link>
        <Link to='/reviews?category=roll-and-write'>
        <div className="homepage-card no1">
            <h4>Roll And Write</h4>
        </div>
        </Link>
        <Link to='/reviews?category=deck-building'>
        <div className="homepage-card no2">
            <h4>Deck Building</h4>
        </div>
        </Link>
        <Link to='/reviews?category=engine-building'>
        <div className="homepage-card no1">
            <h4>Engine Building</h4>
        </div>
        </Link>
    </div>
)
};

export default CategoryPage;