import UserPage from './UserPage'
import { useContext, useState } from "react";
import { UserContext } from '../contexts/User';
import { getUser } from '../utils/api';

const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);
    const username = user.username;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        return getUser(e.target.value)
            .then((userData) => {
                setUser(userData.username);
                if (!userData.username === '') (<UserPage />)
            })
            .catch((err) => {
                if (err) setUser('')
                console.error(err);
            })
        }

    if (username === '') {
        return (
        <form className="login-page" onSubmit={handleSubmit}>
            <label htmlFor="ursername">Username:</label>
            <input type="text" id="username" placeholder="Username"></input>
            <button type="submit" value="submit">Login</button>
        </form>)
        } else {
        return (
            <UserPage />
        )
    };
};

export default LoginPage;