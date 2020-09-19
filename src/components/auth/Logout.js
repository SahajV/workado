import * as React from "react";
import { auth } from "../../Firebase";
export default function Logout() {
    React.useEffect(() => {
        auth.signOut();
    }, []);

    return <div>Logging out...</div>;
}
