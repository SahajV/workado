import * as React from "react";
import { Link } from "react-router-dom";
import useUser from "../_hooks/useUser";
import NavbarInstance from "./NavbarInstance";

export default function Dashboard() {
  const { isLoggedIn, userState } = useUser();
  return isLoggedIn() ? (
    <div>
      <NavbarInstance />
      <h2>{userState.email}</h2>
      <h2>{userState.uid}</h2>
      <img src={userState.photoURL} alt="Italian Trulli"></img>
      <br></br>
      <Link to="/logout">sign out.</Link>
    </div>
  ) : (
      <div>
        Insuffiecent permissions, please sign in <Link to="/signin">here</Link>
      </div>
    );
}
