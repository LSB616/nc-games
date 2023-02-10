import UserPage from './UserPage'
import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import { getUser, userLogin } from '../utils/api';

const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


        const handleSubmit = (e) => {
            e.preventDefault();
            return userLogin({username: username, password: password})
            .then((res) => {
                console.log(res)
                // let login = {loggedIn: true, username: res.user.username, name: res.user.name, avatar_url: res.user.avatar_url}
                // setUser(login)
            })
            .catch((err) => {
                console.error(err);
            })
        };


        if (!user.loggedIn){
            return (
                <section className="login-page">
                <h1>Sign In Here</h1>
                <div className="login-form-box">
                <form className="login-form" onSubmit={handleSubmit}>
                <div className='flex-input'>
                    <label htmlFor="ursername">Username:</label>
                    <input type="textarea" id="username" placeholder="Username" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                </div>
                <div className='flex-input'>
                    <label htmlFor="ursername">Password:</label>
                    <input type="textarea" id="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
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
                <div className='create-account'>
                <h1>Create Account</h1>
                <Link to="/create-account">
                <button>Register</button>
                </Link>
                </div>
                </section>
                )
                } else {
                return (<UserPage />)
                };
};

export default LoginPage;