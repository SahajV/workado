import { authState } from "rxfire/auth";
import { auth } from "../Firebase";

// authState returns a rxjs Observable that contains
// the state of the user (firebase.User || null)
export default authState(auth);