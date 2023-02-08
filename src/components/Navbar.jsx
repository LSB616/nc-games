import { Link } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from '../contexts/User';

const Navbar = () => {
const { user } = useContext(UserContext);

if (!user.loggedIn) {
return (
    <div className='navbar'>
        <Link to='/' className='navbar-links'>
        <img src={require("../images/Logo-3-black.png")} className="logo" alt="D20 Dice"/>
        </Link>
    <nav>
    <Link to='/' className='navbar-links'>Home</Link>
    <Link to='/reviews' className='navbar-links'>Reviews</Link>
    <Link to='/categories' className='navbar-links'>Categories</Link>
    <Link to='/login' className='navbar-links-login'>Login Here!</Link>
    </nav>
    </div>
)
} else {
    return (
    <div className='navbar'>
    <Link to='/' className='navbar-links'>
    <img src={require("../images/Logo-3-black.png")} className="logo" alt="D20 Dice"/>
    </Link>
    <nav>
    <Link to='/' className='navbar-links'>Home</Link>
    <Link to='/reviews' className='navbar-links'>Reviews</Link>
    <Link to='/categories' className='navbar-links'>Categories</Link>
    <img src={user.avatar_url} className="navbar-avatar"/>
    <Link to={`/users/${user.username}`} className='navbar-links-username'>{user.name}!</Link>
    </nav>
    </div>
    )
}
};

export default Navbar;