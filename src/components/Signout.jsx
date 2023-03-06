import { useContext, useState, useEffect } from "react";
import { UserContext } from '../contexts/User';
import { HomePage } from "./HomePage";
import { Link } from "react-router-dom";

const Signout = () => {
    const { setUser } = useContext(UserContext);
    const [loggedOut, setLoggedOut] = useState('');
    
    useEffect(() => {
    setLoggedOut(false);
    }, [])
    

    const signOut = (e) => {
        e.preventDefault();
        let login = {loggedIn: '', username: '', name: '', avatar_url: '', email: ''}
        return setUser(login), setLoggedOut(true);
    };

    if (!loggedOut) {
    return (
        <div className="userpage">
        <form onSubmit={signOut}>
        <button className="signout-button">Sign Out Here</button>
        </form>
        </div>)
     } else if (loggedOut) {
        return (<HomePage />)}
}

export default Signout