import { Link } from 'react-router-dom'

const Footer = () => {
return (
    <div className='footer'>
        <Link to='/'>
        <img src={require("../images/Logo-3-black.png")} className="logo" alt="D20 Dice"/>
        </Link>
    </div>
)
};

export default Footer;