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
            let obj = {};
            obj.class = assignmentData.class;
            obj.date = assignmentData.date;
            obj.timeDue = assignmentData.timeDue;
            const now = Date.now();
            const dateNow = new Date(now);
            const secondsNow = dateNow.getSeconds();
            const minutesNow = dateNow.getMinutes();
            const hoursNow = dateNow.getHours();
            const today = now - (secondsNow + minutesNow * 60 + hoursNow * 3600) * 1000;
            let c = 1;
            while ('dow' + c in assignmentData) {
                let timesPair = {}
                let weekDay = parseInt(assignmentData['dow' + c]);
                let diff = 0;
                while (new Date(today + (diff * 86400 * 1000)).getDay() != weekDay) {
                    console.log(new Date(today + (diff * 86400 * 1000)).getDay() + ' ' + diff + ' ' + (today + (diff * 86400 * 1000)))
                    diff++;
                }
                let firstValidDateSeconds = new Date(today + ((diff + 1) * 86400 * 1000)).getTime();
                timesPair['start'] = firebase.firestore.Timestamp.fromDate(new Date(firstValidDateSeconds + parseInt(assignmentData['startTime' + c].slice(0, 2)) * 3600 * 1000 + parseInt(assignmentData['startTime' + c].slice(3)) * 60 * 1000));
                timesPair['end'] = firebase.firestore.Timestamp.fromDate(new Date(firstValidDateSeconds + parseInt(assignmentData['endTime' + c].slice(0, 2)) * 3600 * 1000 + parseInt(assignmentData['endTime' + c].slice(3)) * 60 * 1000));
                obj.times.push(timesPair);
                c++;
            }
            assignments[assignmentData.period] = obj;
            doc.set({ 'assignments': assignments }, { merge: true });
            this.props.close()
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
                <form onSubmit={this.SubmitHandler}>
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
                        required
                    />
                    <p>Time Due:</p>
                    <input
                        id="timeDue"
                        type="time"
                        onchange={this.myChangeHandler}
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
