import { Link } from 'react-router-dom'

const Navbar = () => {
return (
    <nav className='navbar'>
    <Link to='/'>Home</Link>
    <span> | </span>
    <Link to='/reviews'>Reviews</Link>
    <span> | </span>
    <Link to='/reviews?category=strategy'>Strategy</Link>
    <span> | </span>
    <Link to='/reviews?category=hidden-roles'>Hidden Roles</Link>
    <span> | </span>
    <Link to='/reviews?category=dexterity'>Dexterity</Link>
    <span> | </span>
    <Link to='/reviews?category=push-your-luck'>Push Your Luck</Link>
    <span> | </span>
    <Link to='/reviews?category=roll-and-write'>Roll And Write</Link>
    <span> | </span>
    <Link to='/reviews?category=deck-building'>Deck Building</Link>
    <span> | </span>
    <Link to='/reviews?category=engine-building'>Engine Building</Link>
    <p>Hello There!</p>
    <Link to='/login'>Login Here!</Link>
    </nav>
)
};

export default Navbar;