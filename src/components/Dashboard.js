import * as React from "react";
import { Link } from "react-router-dom";
import useUser from "../_hooks/useUser";
<<<<<<< HEAD
import RsModal from "./RsModal"
=======
import NavbarInstance from "./NavbarInstance";
import ClassModal from "./ClassModal"
>>>>>>> f93c006cfff45a0ab9150a78287d33f7ac80da50

export default function Dashboard() {
  const { isLoggedIn, userState } = useUser();
  return isLoggedIn() ? (
    <div>
<<<<<<< HEAD
        <RsModal />
=======
        <NavbarInstance />
        <ClassModal />
>>>>>>> f93c006cfff45a0ab9150a78287d33f7ac80da50
    </div>
  ) : (
      <div>
        Insuffiecent permissions, please sign in <Link to="/signin">here</Link>
      </div>
    );
}
