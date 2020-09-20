import {auth, google, db} from "../Firebase"
import { useState } from 'react'
import useUser from "../_hooks/useUser";


function PoolClasses(props) {
    const userState = useUser();
    var users = db.collection("users");
    var results = [];
    console.log(props.id) 
    return(
        results
    )
}

export default PoolClasses