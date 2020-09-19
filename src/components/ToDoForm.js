import React, { Component } from 'react'
import { Button, Icon, ButtonGroup } from 'rsuite';

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { assignment: '', class: '', date: '', timeDue: ''};
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + JSON.stringify(this.state));
    }
    myChangeHandler = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.mySubmitHandler}>
                    <p>Assignment:</p>
                    <input
                        id='assignment'
                        type='text'
                        onChange={this.myChangeHandler}
                        required
                    />
                    <p>Class:</p>
                    <input
                        id='class'
                        type='text'
                        onChange={this.myChangeHandler}
                    />
                    <p>Due Date:</p>
                    <input
                    id='date'
                        type="date"
                        onchange={this.myChangeHandler}
                        value="Due Date"
                        required
                    />
                    <p>Time Due:</p>
                    <input
                    id="timeDue"
                        type="time"
                    />
                    <br/>
                    <br/>
                    <ButtonGroup>
                        <Button appearance="primary" color="red" type="submit"><Icon icon="angle-double-right" /> Submit</Button>
                        <Button appearance="ghost" color="red" type="reset">Clear</Button>
                    </ButtonGroup>
                </form>

            </div>
        );
    }
}

//defaultValue="2020-01-01T11:59"
export default ToDoForm;