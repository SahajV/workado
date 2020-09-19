import React from 'react'
import { Link } from "react-router-dom";
import useUser from "../_hooks/useUser";

function Dashboard() {
    const { isLoggedIn, userState } = useUser();
    return (
        <div>
            <h2>{userState.email}</h2>
            <h2>{userState.uid}</h2>
            <img src={userState.photoURL} alt="Italian Trulli"></img>
            <br></br>
            <Link to="/logout">sign out.</Link>
        </div>
    )
}

export default Dashboard