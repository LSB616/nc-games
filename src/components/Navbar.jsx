import { Link } from 'react-router-dom'

const Navbar = () => {
return (
    <div className='navbar'>
        <img src={require("../images/Logo-3-black.png")} className="logo" alt="D20 Dice"/>
    <nav>
    <Link to='/' className='navbar-links'>Home</Link>
    <Link to='/reviews' className='navbar-links'>Reviews</Link>
    <Link to='/strategy' className='navbar-links'>Strategy</Link>
    <Link to='/hidden-roles' className='navbar-links'>Hidden Roles</Link>
    <Link to='/dexterity' className='navbar-links'>Dexterity</Link>
    <Link to='/push-your-luck' className='navbar-links'>Push Your Luck</Link>
    <Link to='/roll-and-write' className='navbar-links'>Roll And Write</Link>
    <Link to='/deck-building' className='navbar-links'>Deck Building</Link>
    <Link to='/engine-building' className='navbar-links'>Engine Building</Link>
    <Link to='/login' className='navbar-links login'>Login Here!</Link>
    </nav>
    </div>
)
};

export default Navbar;