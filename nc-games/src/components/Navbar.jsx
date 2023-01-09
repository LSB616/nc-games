import { Link } from 'react-router-dom'

const Navbar = () => {
return (
    <nav className='navbar'>
    <Link to='/'>Home</Link>
    <span> | </span>
    <Link to='/reviews'>Reviews</Link>
    <span> | </span>
    <Link to='/strategy'>Strategy</Link>
    <span> | </span>
    <Link to='/hidden-roles'>Hidden Roles</Link>
    <span> | </span>
    <Link to='/dexterity'>Dexterity</Link>
    <span> | </span>
    <Link to='/push-your-luck'>Push Your Luck</Link>
    <span> | </span>
    <Link to='/roll-and-write'>Roll And Write</Link>
    <span> | </span>
    <Link to='/deck-building'>Deck Building</Link>
    <span> | </span>
    <Link to='/engine-building'>Engine Building</Link>
    <p>Hello There!</p>
    <Link to='/login'>Login Here!</Link>
    </nav>
)
};

export default Navbar;