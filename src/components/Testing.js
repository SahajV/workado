import { Link } from "react-router-dom";
import useUser from "../_hooks/useUser";
import React from "react";
import ClassForm from "./ClassForm";
import NavbarInstance from "./NavbarInstance";
import 'rsuite/dist/styles/rsuite-default.css';

export default function Testing() {
  const { isLoggedIn, userState } = useUser();
  
  return isLoggedIn() ? (
    <div>
        <NavbarInstance />
    </div>
  ) : (
      <div>
        Insuffiecent permissions, please sign in <Link to="/signin">here</Link>
      </div>
    );
}
