import { Link } from "react-router-dom";
import useUser from "../_hooks/useUser";
import React from "react";
import ClassForm from "./ClassForm";
import ToDoForm from "./ToDoForm"

export default function Testing() {
  const { isLoggedIn, userState } = useUser();
  return isLoggedIn() ? (
    <div>
        <ClassForm />
        <ToDoForm />
      <Link to="/logout">sign out.</Link>
    </div>
  ) : (
      <div>
        Insuffiecent permissions, please sign in <Link to="/signin">here</Link>
      </div>
    );
}