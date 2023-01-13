import UserPage from './UserPage'
import { useContext, useEffect, useState } from "react";
import { UserContext } from '../contexts/User';
import { getUser } from '../utils/api';

const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);
    const [username, setUsername] = useState('')


        const handleSubmit = (e) => {
            e.preventDefault();
            return getUser(username)
            .then((res) => {
                setUser(res)
            }).catch((err) => {
                console.error(err);
            })
        };

        if (user.username === ''){
            return (
                <form className="login-page" onChange={(e) => {setUsername(e.target.value)}}>
                    <label htmlFor="ursername">Username:</label>
                    <input type="textarea" id="username" placeholder="Username"></input>
                    <button type="submit" onSubmit={handleSubmit}>Login</button>
                </form>)
                } else {
                return (<UserPage />)
                };
};

export default LoginPage;