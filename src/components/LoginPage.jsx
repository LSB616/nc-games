import UserPage from './UserPage'
import { useContext, useState } from "react";
import { UserContext } from '../contexts/User';
import { getUser } from '../utils/api';

const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);
    const username = user.username;

    const handleSubmit = (username) => {
        console.log(username)
    }

        return (
        <form className="login-page" onChange={(e) => {setUser({username: e.target.value})}}>
            <label htmlFor="ursername">Username:</label>
            <input type="textarea" id="username" placeholder="Username"></input>
            <button type="submit" onSubmit={handleSubmit(username)}>Login</button>
        </form>)
};

export default LoginPage;

// const handleSubmit = (username) => {
//     // console.log(username, '<---- username')
//     if (username === ''){

//     } else {
//     return getUser(username.username)
//         .then((userData) => {
//             // console.log(userData, '<-- user data')
//             if (!userData.username === '') (<UserPage />)
//         })
//         .catch((err) => {
//             if (err) setUser('')
//             console.error(err);
//         })
//     }
// }