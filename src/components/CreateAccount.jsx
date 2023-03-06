import { useEffect, useState, useContext } from "react";
import LoadingPage from "./LoadingPage";
import { postUser } from "../utils/api";
import { UserContext } from '../contexts/User';
import { Link } from "react-router-dom";


const CreateAccount = () => {
    const { user, setUser } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isLoading, setIsLoading] = useState();
    const [accountCreated, setAccountCreated] = useState();

    useEffect(() => {
        setIsLoading(false)
        setAccountCreated(false)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== password2) {
            var popup = document.getElementById("myPopup");
            return popup.classList.toggle("show");
        }
        return postUser({username: username, name: name, avatar_url: avatar, email: email, password: password})
        .then((res) => {
            let login = {loggedIn: true, username: res.data.username, name: res.data.name, avatar_url: res.data.avatar_url, email: res.data.email}
            setAccountCreated(true);
            setUser(login);
        })
        .catch((err) => {
            console.error(err);
        })   
    };

    if (isLoading) {
        return <LoadingPage />;
    };

    if (!user.loggedIn) {
    return (
<section className='review-add-page'>
<img className='add-review-img' src={require('../images/AdobeStock_421558379.jpeg')} alt="" data-image-width="1920" data-image-height="911"></img>
<div className="review-add-div1">
<div className="review-add-div2">
<h2 className="review-add-h2">Create Account</h2>
<p className="review-add-p1">Get Involved And Join The Community!</p>
<div className='add-review-form-div'>
<form  className='add-review-form' onSubmit={handleSubmit}>
    <div className="add-review-title">
        <label htmlFor='username' className="add-review-title-label">Username</label>
        <input type="text" id="review-title" placeholder="Username" className="add-review-title-input" value={username} onChange={(e) => {setUsername(e.target.value)}} required></input>
    </div>
      <div className="add-review-title">
        <label htmlFor='name' className="add-review-title-label">Name</label>
        <input type="text" id="review-title" placeholder="Name" className="add-review-designer-input" value={name} onChange={(e) => {setName(e.target.value)}} required></input>
      </div>
        <div className="add-review-img-url">
        <label htmlFor='avatar-image-url' className="add-review-img-url-label">Image</label>
        <input type="text" id="review-image-url" placeholder="Avatar Image URL" className="add-review-img-url-input" value={avatar} onChange={(e) => {setAvatar(e.target.value)}} required></input>    
        </div>
      <div className="add-review-body">
        <label htmlFor='review-body' className="add-review-body-label">Email</label>
        <input id="review-body" className="add-review-body-input" placeholder="E-mail" value={email} onChange={(e) => {setEmail(e.target.value)}} required></input>
      </div>
      <div className="add-review-body">
        <label htmlFor='password-1' className="add-review-body-label">Password</label>
        <input id="review-body" type="password" className="add-review-body-input" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}} required></input>
      </div>
      <div className="add-review-body">
        <label htmlFor='password-2' className="add-review-body-label">Password</label>
        <input id="review-body" type="password" className="add-review-body-input" placeholder="Confirm Password" value={password2} onChange={(e) => {setPassword2(e.target.value)}} required></input>
      </div>
      <div class="popup">
        <span class="popuptext" id="myPopup">Passwords Don't Match...</span>
    </div> 
      <div className="add-review-button-div">
        <button type="submit" className="add-review-page-button">Submit</button>
      </div>
    </form>
</div>
</div>
</div>
</section>
    )
    } else if (user.loggedIn && !accountCreated) {
        return (
            <div className='userpage'>
                <h2>You Already Have An Account!</h2>
                <p>Click Below To Go To Your User Page</p>
                <Link to={`/users/${user.username}`}>
                <button>UserPage</button>
                </Link>
            </div>
        )
    } else if (user.loggedIn && accountCreated) {
        return (
        <div className='userpage'>
        <section className='userdetails'>
        <div className="user">
        <h2>Welcome {user.username}!</h2>
        <p>Be Kind and Have Fun!</p>
        <img className="user-profile-img" src={user.avatar_url} alt="user profile image"></img>
        </div>
        <p>Click Below to Post Your First Review!</p>
        </section>
        <div className="user-page-add-review">
        <Link to="/reviews/add-review">
        <button>Add Review</button>
        </Link>
        </div>
        </div>
        )
    }
};

export default CreateAccount;