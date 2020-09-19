import {auth, google, db} from "../Firebase"
import useUser from "../_hooks/useUser";


function PoolClasses() {
    const {userState} = useUser();
    var classes = db.collection("classes");
    var results = [];
    results.push(classes.where("name", "==", "Geosystems"))
    return(
        results
    )
}

export default PoolClasses