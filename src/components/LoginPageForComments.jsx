import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import { getUser } from '../utils/api';

const LoginPageForComments = () => {
    const { user, setUser } = useContext(UserContext);
    const [username, setUsername] = useState('')


        const handleSubmit = (e) => {
            e.preventDefault();
            return getUser(username)
            .then((res) => {
                let login = {loggedIn: true, username: res.user.username, name: res.user.name, avatar_url: res.user.avatar_url}
                setUser(login)
            })
            .catch((err) => {
                console.error(err);
            })
        };


        if (!user.loggedIn){
            return (
                <section className="login-page-for-comments">
                <div className="login-form-box">
                <form className="login-form" onSubmit={handleSubmit}>
                <h2>Sign In To Comment</h2>
                <div className='flex-input'>
                    <label htmlFor="ursername">Username:</label>
                    <input type="textarea" id="username" placeholder="Username" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                </div>
                <div className='flex-input'>
                    <label htmlFor="ursername">Password:</label>
                    <input type="textarea" id="password" placeholder="Password" />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
                <div className='extras-flex-container'>
                    <div>
                    <input type="checkbox" id="remember-me" />
                    <span>Remember me</span>
                    </div>
                    <div>
                    <Link>
                    <p className="Link">Forgot Password?</p>
                    </Link>
                    </div>
                </div>
                </form>
                </div>
                </section>
                )
                } 
};

export default LoginPageForComments;