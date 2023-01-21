import { useEffect, useState, useContext } from "react";
import LoadingPage from "./LoadingPage";
import { postUser } from "../utils/api";
import { UserContext } from '../contexts/User';
import { Link } from "react-router-dom";


const CreateAccount = () => {
    const { user, setUser } = useContext(UserContext);
    const [username, setUsername] = useState();
    const [name, setName] = useState();
    const [avatar, setAvatar] = useState();
    const [isLoading, setIsLoading] = useState();
    const [accountCreated, setAccountCreated] = useState();

    useEffect(() => {
        setIsLoading(false)
        setAccountCreated(false)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        return postUser({username: username, name: name, avatar_url: avatar})
        .then(({ username, name, avatar_url }) => {
            let login = {loggedIn: true, username: username, name: name, avatar_url: avatar_url}
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
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => {setUsername(e.target.value)}} required></input>
            <label>Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => {setName(e.target.value)}} required></input>
            <label>Avatar:</label>
            <input type="text" id="avatar" value={avatar} onChange={(e) => {setAvatar(e.target.value)}} required></input>
            <button type="submit">Submit</button>
        </form>
    )
    } else if (user.loggedIn && !accountCreated) {
        return (
            <section>
                <h2>You Already Have An Account!</h2>
                <p>Click Below To Go To Your User Page</p>
                <Link to={`/users/${user.username}`}>
                <button>UserPage</button>
                </Link>
            </section>
        )
    } else if (user.loggedIn && accountCreated) {
        return (
            <section>
            <h2>Welcome {user.username}!</h2>
            <p>Be Kind and Have Fun!</p>
            <p>Click Below to Post Your First Review!</p>
            <Link to="/reviews/add-review">
            <button>Add Review</button>
            </Link>
        </section>
        )
    }
};

export default CreateAccount;