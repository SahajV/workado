import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, DatePicker } from 'rsuite';



function ToDoForm() {


    return (
        <div>
            <Form> 
                <DatePicker format="YYYY-MM-DD HH-mm" style={{ width: 280}} />
            </Form>
        </div>
    );

}
//defaultValue="2020-01-01T11:59"
export default ToDoForm;