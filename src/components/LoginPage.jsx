import UserPage from './UserPage'
import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import { getUser } from '../utils/api';

const LoginPage = () => {
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
                <div>
                <h3>Sign In Here</h3>
                <form className="login-page" onSubmit={handleSubmit}>
                    <label htmlFor="ursername">Username:</label>
                    <input type="textarea" id="username" placeholder="Username" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                    <button type="submit">Login</button>
                </form>
                <h3>Create Account</h3>
                <Link to="/create-account">
                <button>Register</button>
                </Link>
                </div>
                )
                } else {
                return (<UserPage />)
                };
};

export default LoginPage;