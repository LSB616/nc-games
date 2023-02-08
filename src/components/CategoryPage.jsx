import { Link } from 'react-router-dom'

const CategoryPage = () => {
return (
<div className="reviews-page">
<h2>Categories</h2>
<section >
<div className="grid">
<ul id="hexGrid">
    <li className="hex-cat">
    <Link to='/reviews?category=strategy'>
    <div className="hexIn">
    <div className="hexLink">
    <div className='img-2' style={{'backgroundImage': `url(https://i.pinimg.com/564x/dd/5e/25/dd5e2521f5b5c60e71739894174fd759.jpg)`}}></div>
    <h2 id="demo5">Strategy</h2>
    </div>
    </div>
    </Link>
    </li>
    <li className="hex-cat">
    <Link to='/reviews?category=hidden-roles'>
    <div className="hexIn">
    <div className="hexLink">
    <div className='img-2' style={{'backgroundImage': `url(https://i.pinimg.com/564x/30/a7/d8/30a7d84ad67fbb90a474a5d6884b99d5.jpg)`}}></div>
    <h2 id="demo5">Hidden Roles</h2>
    </div>
    </div>
    </Link>
    </li>
    <li className="hex-cat">
    <Link to='/reviews?category=dexterity'>
    <div className="hexIn">
    <div className="hexLink">
    <div className='img-2' style={{'backgroundImage': `url(https://i.pinimg.com/564x/e1/3e/69/e13e69c7e0d3dffad8bc863089c8150d.jpg)`}}></div>
    <h2 id="demo5">Dexterity</h2>
    </div>
    </div>
    </Link>
    </li>
    <li className="hex-cat">
    <Link to='/reviews?category=push-your-luck'>
    <div className="hexIn">
    <div className="hexLink">
    <div className='img-2' style={{'backgroundImage': `url(https://i.pinimg.com/564x/67/f8/93/67f893439bf01009896183dde2e1426b.jpg)`}}></div>
    <h2 id="demo5">Push Your Luck</h2>
    </div>
    </div>
    </Link>
    </li>
    <li className="hex-cat">
    <Link to='/reviews?category=roll-and-write'>
    <div className="hexIn">
    <div className="hexLink">
    <div className='img-2' style={{'backgroundImage': `url(https://i.pinimg.com/564x/52/1b/c7/521bc7e854cb73905cd01227ae1e7eb6.jpg)`}}></div>
    <h2 id="demo5">Roll And Write</h2>
    </div>
    </div>
    </Link>
    </li>
    <li className="hex-cat">
    <Link to='/reviews?category=deck-building'>
    <div className="hexIn">
    <div className="hexLink">
    <div className='img-2' style={{'backgroundImage': `url(https://i.pinimg.com/564x/39/25/a7/3925a7a70a6dee556ba92abe766b8787.jpg)`}}></div>
    <h2 id="demo5">Deck Building</h2>
    </div>
    </div>
    </Link>
    </li>
    <li className="hex-cat">
    <Link to='/reviews?category=engine-building'>
    <div className="hexIn">
    <div className="hexLink">
    <div className='img-2' style={{'backgroundImage': `url(https://i.pinimg.com/564x/4d/67/7b/4d677b7db86ba95407e608b0743ba060.jpg)`}}></div>
    <h2 id="demo5">Engine Building</h2>
    </div>
    </div>
    </Link>
    </li>
</ul>
</div>
</section>
</div>
)
};

export default CategoryPage;