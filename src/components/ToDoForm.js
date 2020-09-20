import React, { Component } from 'react'
import { useState } from 'react'
import { Button, Icon, ButtonGroup } from 'rsuite';

function ToDoForm(props) {
    const [toDoItem, setToDoItem] = useState({ assignment: '', class: '', date: '', timeDue: '' });

    const mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + JSON.stringify(toDoItem));
    }
    const myChangeHandler = (event) => {
        console.log(event.target.value)
        setToDoItem({...toDoItem, [event.target.id]: event.target.value, });
    }

    return (
        <div>
            <form onSubmit={mySubmitHandler}>
                <p>Assignment for {props.id}:</p>
                <input
                    id='assignment'
                    type='text'
                    onChange={myChangeHandler}
                    required
                />
                <p>Class:</p>
                <input
                    id='class'
                    type='text'
                    onChange={myChangeHandler}
                />
                <p>Due Date:</p>
                <input
                    id='date'
                    type="date"
                    onchange={myChangeHandler}
                    required
                />
                <p>Time Due:</p>
                <input
                    id="timeDue"
                    type="time"
                    onchange={myChangeHandler}
                />
                <br />
                <br />
                <ButtonGroup>
                    <Button appearance="primary" color="red" type="submit"><Icon icon="angle-double-right" /> Submit</Button>
                    <Button appearance="ghost" color="red" type="reset">Clear</Button>
                </ButtonGroup>
            </form>

        </div>
    )
}

export default ToDoForm;