import {auth, google, db} from "../Firebase"
import { useState } from 'react'
import useUser from "../_hooks/useUser";
import useAsync from "react-async"

function PoolClasses(props) {
    let id = props.id

    try {
        var results = {};
        db.collection("users").doc(id).get().then((doc) => {
            for(var key in doc.data().classes) {
                results[key] = doc.data().classes[key]
            }
        }) 
        console.log("dsffsdf" + JSON.stringify(results))
        return(
            JSON.stringify(results)
        )
    }
    catch (error) {
       
    }
    console.log(results)

}
async function databaseQuery(id) {
    var results = {};
    await db.collection("users").doc(id).get().then((doc) => {
        for(var key in doc.data().classes) {
            results[key] = doc.data().classes[key]
        }
    })
    console.log(results + "async")
    return results
}
export default PoolClasses