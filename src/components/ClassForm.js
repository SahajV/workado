import React from 'react'
<<<<<<< HEAD
import { Button, Icon, ButtonGroup } from 'rsuite';
=======
import {auth, google, db} from "../Firebase"
import { Button, Icon } from 'rsuite';
import useUser from "../_hooks/useUser";

>>>>>>> 79c97e56e67608ea5ffc003a800b55a81066228b

class ClassForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { class: '', instructor: '', location: '', startTime: '', endTime: '', dow: '', period: ''};
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(event)
        db.collection("users").doc("t1EF5NoDCJMX6leq0bGz9xS3Kjz1").get().then((doc) => {
            console.log(doc.data())
        })

        alert("You are submitting " + JSON.stringify(this.state));
    }
    myChangeHandler = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <a>{JSON.stringify(this.state)}</a>
                <p>Class:</p>
                <input
                    id='class'
                    type='text'
                    onChange={this.myChangeHandler}
                />
                <p>Instructor:</p>
                <input
                    id='instructor'
                    type='text'
                    onChange={this.myChangeHandler}
                />
                <p>Location:</p>
                <input
                    id='location'
                    type='text'
                    onChange={this.myChangeHandler}
                />
                <p>Start Time:</p>
                <input
                    id='startTime'
                    type='time'
                    onChange={this.myChangeHandler}
                />
                <p>End Time:</p>
                <input
                    id='endTime'
                    type='time'
                    onChange={this.myChangeHandler}
                />
                <p>Day of the Week:</p>
                <select id="dow" name="dow" onChange={this.myChangeHandler}>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="september">September</option>
                    <option value="sunday">Sunday</option>
                </select>
                <p>Period:</p>
                <input
                    id='period'
                    type='number'
                    onChange={this.myChangeHandler}
                />
                <br></br>
                <br></br>
                <ButtonGroup>
                <Button appearance="primary" color = "red" type="submit"><Icon icon="angle-double-right"  /> Submit</Button>
                <Button appearance="ghost" color = "red" type="reset"><Icon icon="angle-double-right"  /> Clear</Button>
                </ButtonGroup>
            </form>
        );
    }
}

export default ClassForm