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
                setUser(res.user)
            }).catch((err) => {
                console.error(err);
            })
        };

        if (!user){
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