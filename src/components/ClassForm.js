import React, { isValidElement } from 'react'
import { interpolate } from 'react-spring';
import { Button, Icon, ButtonGroup } from 'rsuite';
import {db} from "../Firebase";
import * as firebase from "firebase/app";
import "firebase/firestore";
import useUser from "../_hooks/useUser";
import { Link } from "react-router-dom";
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

let classTimesCounter = 1;
let formObj = {};
const Widget = () => <div>
<br></br>
<strong>Class times {classTimesCounter}</strong>
<p>Start Time:</p>
<input
    id={'startTime'+classTimesCounter}
    type='time'
    onChange={(event) => {
        formObj[event.target.id] = event.target.value
    }}
    required
/>
<p>End Time:</p>
<input
    id={'endTime'+classTimesCounter}
    type='time'
    onChange={(event) => {
        formObj[event.target.id] = event.target.value
    }}
    required
/>
<p>Day of the Week:</p>
<select id={'dow'+classTimesCounter++} onChange={(event) => {
        formObj[event.target.id] = event.target.value
    }} required>
    <option value="">-- Select --</option>
    <option value="0">Monday</option>
    <option value="1">Tuesday</option>
    <option value="2">Wednesday</option>
    <option value="3">Thursday</option>
    <option value="4">Friday</option>
    <option value="5">Saturday</option>
    <option value="6">Sunday</option>
</select>
</div>;

export default class ClassForm extends React.Component {
    constructor() {
        super();
        this.state = { components: [] };
    }
    
    mySubmitHandler = (event) => {
        event.preventDefault();
        let classData = JSON.parse(JSON.stringify(formObj));  // a copy
        formObj = {};
        const doc = db.collection("users").doc(this.props.id);
        doc.get().then((d) => {
            let classes = d.data().classes;
            let obj = {};
            obj.color = classData.color.toLowerCase();
            obj.instructor = classData.instructor;
            obj.location = classData.location;
            obj.name = classData.class;
            obj.times = [];
            const now = Date.now();
            const dateNow = new Date(now);
            const secondsNow = dateNow.getSeconds();
            const minutesNow = dateNow.getMinutes();
            const hoursNow = dateNow.getHours();
            const today = now - (secondsNow + minutesNow * 60 + hoursNow * 3600) * 1000;
            let c = 1;
            while ('dow' + c in classData) {
                let timesPair = {}
                let weekDay = parseInt(classData['dow' + c]);
                let diff = 0;
                while (new Date(today + (diff * 86400 * 1000)).getDay() != weekDay) {
                    console.log(new Date(today + (diff * 86400 * 1000)).getDay() + ' ' + diff + ' ' + (today + (diff * 86400 * 1000)))
                    diff++;
                }
                let firstValidDateSeconds = new Date(today + ((diff + 1) * 86400 * 1000)).getTime();
                timesPair['start'] = firebase.firestore.Timestamp.fromDate(new Date(firstValidDateSeconds + parseInt(classData['startTime' + c].slice(0, 2)) * 3600 * 1000 + parseInt(classData['startTime' + c].slice(3)) * 60 * 1000));
                timesPair['end'] = firebase.firestore.Timestamp.fromDate(new Date(firstValidDateSeconds + parseInt(classData['endTime' + c].slice(0, 2)) * 3600 * 1000 + parseInt(classData['endTime' + c].slice(3)) * 60 * 1000));
                obj.times.push(timesPair);
                c++;
            }
            classes[classData.period] = obj;
            doc.set({'classes': classes}, {merge: true});
            this.props.close()
        });
    }
    myChangeHandler = (event) => {
        // console.log(this.props.id)
        classTimesCounter = 1;
        console.log(event)
        formObj[event.target.id] = event.target.value
        console.log(formObj)
    }
    renderWidget() {
        classTimesCounter = 1;
        const newComponents = [...this.state.components, Widget];
        this.setState({
          components: newComponents
        });
    }
    render() {
        const { components } = this.state;
        return (
            <div>
                <form onSubmit={this.mySubmitHandler}>
                    <p>Class:</p>
                    <input
                        id='class'
                        type='text'
                        onChange={this.myChangeHandler}
                        required
                    />
                    <p>Instructor:</p>
                    <input
                        id='instructor'
                        type='text'
                        onChange={this.myChangeHandler}
                        required
                    />
                    <p>Location:</p>
                    <input
                        id='location'
                        type='text'
                        onChange={this.myChangeHandler}
                        required
                    />
                    <p>Period/block/ID (one character, must be unique):</p>
                    <input
                        id='period'
                        type='text'
                        maxlength='1'
                        onChange={this.myChangeHandler}
                        required
                    />
                    <p>Color (hex code, include the "#"):</p>
                    <input
                        id='color'
                        type='text'
                        minlength='7'
                        maxlength='7'
                        onChange={this.myChangeHandler}
                        required
                    />
                    <br></br>
                    <br></br>
                    <section className="section">
                        <div className="container has-text-right">
                            <button
                            type="button"
                            className="button is-dark is-outlined"
                            onClick={this.renderWidget.bind(this)}
                            >
                            <span className="icon">
                                <i className="fas fa-plus" />
                                Add class times
                            </span>
                            </button>
                        </div>
                        <div>
                            {components.length !== 0 &&
                            components.map((Widget, i) => <Widget key={i} />)}
                        </div>
                    </section>
                    <br></br>
                    <br></br>
                    <ButtonGroup>
                    <Button appearance="primary" color = "red" type="submit"><Icon icon="angle-double-right"  /> Submit</Button>
                    <Button appearance="ghost" color = "red" type="reset"><Icon icon="angle-double-right"  /> Clear</Button>
                    </ButtonGroup>
                </form>
            </div>
        );
    }
}
