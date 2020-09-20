import React, { Component } from 'react'
import { useState } from 'react'
import { Button, Icon, ButtonGroup } from 'rsuite';
import { db } from "../Firebase";
import * as firebase from "firebase/app";
import "firebase/firestore";
import useUser from "../_hooks/useUser";
import { Link } from "react-router-dom";
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

let formObj = {};

export default class ToDoForm extends React.Component {

    constructor() {
        super();
        this.state = { components: [] };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        let assignmentData = JSON.parse(JSON.stringify(formObj));  // a copy
        formObj = {};
        const doc = db.collection("users").doc(this.props.id);
        doc.get().then((d) => {
            let assignments = d.data().assignments;
            console.log('assign' + assignments)
            let obj = {};
            obj.name = assignmentData.assignment;
            obj.class = assignmentData.class;
            obj.date = assignmentData.date;
            obj.timeDue = assignmentData.timeDue;
            assignments.push(obj);
            doc.set({ 'assignments': assignments }, { merge: true });
            this.props.close();
        });
    }
    myChangeHandler = (event) => {
        console.log(event)
        formObj[event.target.id] = event.target.value
        console.log(formObj)
    }

    render() {
        const { components } = this.state;
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
                        required
                    />
                    <p>Due Date:</p>
                    <input
                        id='date'
                        type='date'
                        onChange={this.myChangeHandler}
                        required
                    />
                    <p>Time Due:</p>
                    <input
                        id='timeDue'
                        type='time'
                        onChange={this.myChangeHandler}
                        required
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
}
