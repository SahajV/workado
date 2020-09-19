import * as React from "react";
import { Link } from "react-router-dom";
import useUser from "../_hooks/useUser";
import ClassModal from "./ClassModal"

export default function Dashboard() {
  const { isLoggedIn, userState } = useUser();
  return isLoggedIn() ? (
    <div>
        <ClassModal />
    </div>
  ) : (
      <div>
        Insuffiecent permissions, please sign in <Link to="/signin">here</Link>
      </div>
    );
}