import { Link } from 'react-router-dom'

const Navbar = () => {

return (
    <div className='navbar'>
        <Link to='/' className='navbar-links'>
        <img src={require("../images/Logo-3-black.png")} className="logo" alt="D20 Dice"/>
        </Link>
    <nav>
    <Link to='/' className='navbar-links'>Home</Link>
    <Link to='/reviews' className='navbar-links'>Reviews</Link>
    <Link to='/reviews?category=strategy' className='navbar-links'>Strategy</Link>
    <Link to='/reviews?category=hidden-roles' className='navbar-links'>Hidden Roles</Link>
    <Link to='/reviews?category=dexterity' className='navbar-links'>Dexterity</Link>
    <Link to='/reviews?category=push-your-luck' className='navbar-links'>Push Your Luck</Link>
    <Link to='/reviews?category=roll-and-write' className='navbar-links'>Roll And Write</Link>
    <Link to='/reviews?category=deck-building' className='navbar-links'>Deck Building</Link>
    <Link to='/reviews?category=engine-building' className='navbar-links'>Engine Building</Link>
    <Link to='/login' className='navbar-links login'>Login Here!</Link>
    </nav>
    </div>
)
};

export default Navbar;