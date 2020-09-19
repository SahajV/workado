import * as React from "react";
import { Link } from "react-router-dom";
import useUser from "../_hooks/useUser";
import RsModal from "./RsModal"
import NavbarInstance from "./NavbarInstance";

export default function Dashboard() {
    const { isLoggedIn, userState } = useUser();
    return isLoggedIn() ? (
        <div>
            <NavbarInstance />
            <RsModal />

        </div>
    ) : (
            <div>
                Insuffiecent permissions, please sign in <Link to="/signin">here</Link>
            </div>
        );
}
