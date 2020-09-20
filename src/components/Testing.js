import { Link } from "react-router-dom";
import useUser from "../_hooks/useUser";
import React from "react";
import ClassForm from "./ClassForm";
import ToDoForm from "./ToDoForm";
import PoolClasses from "./PoolClasses";
import NavbarInstance from "./NavbarInstance";
import 'rsuite/dist/styles/rsuite-default.css';

export default function Testing() {
  const { isLoggedIn, userState } = useUser();
  
  return isLoggedIn() ? (
    <div>
      {/* <ClassForm />
      <ToDoForm /> */}

      <PoolClasses id={userState.uid}/>
      {/* <Link to="/logout">sign out.</Link> */}
    </div>
  ) : (
      <div>
        Insuffiecent permissions, please sign in <Link to="/signin">here</Link>
      </div>
    );
}
