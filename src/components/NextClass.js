import { Link } from "react-router-dom";
import useUser from "../_hooks/useUser";
import React from "react";

let formObj = {};

export default class ToDoForm extends React.Component {

    constructor() {
        super();
        this.state = { components: [] };
    }

    mySubmitHandler = (event) => {
        console.log(this.props.id)
    }

    render() {
        const { components } = this.state;
        return (
            <p>Hello</p>
        )
    }
}

