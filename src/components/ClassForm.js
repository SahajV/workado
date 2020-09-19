import React from 'react'
import TextField from '@material-ui/core/TextField';
import useUser from "../_hooks/useUser";
const time = [{end: "end", start: "start"}];   
const classes = [];

function ClassForm() {
    // const {userState} = useUser();
return( 
    // userState, 
    <form>
        <input type="text" id="period">ID (can be period, block number, etc.)</input>
        <input type="text" id="instructor">Instructor</input>
        <input type="text" id="location">Location</input>
        <input type="text" id="name">Class Name</input>
        <TextField
            id="start"
            label="Start Time"
            type="datetime-local"
            defaultValue="2020-09-19T08:00"
            InputLabelProps={{
            shrink: true,
            }}
        />
        <TextField
            id="end"
            label="End Time"
            type="datetime-local"
            defaultValue="2020-09-19T09:00"
            InputLabelProps={{
            shrink: true,
            }}
        />
    </form>
    );
}



export default ClassForm;