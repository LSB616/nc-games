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
                let login = {loggedIn: true, username: res.user.username, name: res.user.name, avatar_url: res.user.avatar_url}
                setUser(login)
            }).catch((err) => {
                console.error(err);
            })
        };


        if (!user.loggedIn){
            return (
                <form className="login-page" onSubmit={handleSubmit}>
                    <label htmlFor="ursername">Username:</label>
                    <input type="textarea" id="username" placeholder="Username" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                    <button type="submit">Login</button>
                </form>)
                } else {
                return (<UserPage />)
                };
};

export default LoginPage;