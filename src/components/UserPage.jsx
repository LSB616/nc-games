import { UserContext } from '../contexts/User';
import { useContext, useEffect, useState } from "react";

const UserPage = () => {
    const { user, setUser } = useContext(UserContext);

    return (
    <h2>Hello There! {user.username}</h2>
    );
};

export default UserPage;