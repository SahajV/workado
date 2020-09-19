import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, DatePicker, Button } from 'rsuite';



function ToDoForm() {


    return (
        <div>
            <Form> 
                <FormGroup>
                    <ControlLabel>Assignment</ControlLabel>
                    <FormControl name="Assignment"/>
                    <HelpBlock tooltip>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Class</ControlLabel>
                    <FormControl name="ClassName"/>
                </FormGroup>
                <FormGroup>
                    <DatePicker format="YYYY-MM-DD" style={{ width: 280}} placeholder="Select Date" />
                    <HelpBlock tooltip>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <DatePicker format="HH:mm" style={{ width: 280}} placeholder="Select Time" />
                </FormGroup>
                <FormGroup>
                    <Button appearence="primary">Submit</Button>
                </FormGroup>
            </Form>
        </div>
    );

}
//defaultValue="2020-01-01T11:59"
export default ToDoForm;