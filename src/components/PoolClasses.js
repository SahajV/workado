import { auth, google, db } from "../Firebase"
import React, { useState, useEffect } from "react"

class PoolClasses extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    async componentDidMount() {
        let results = {};
        await db.collection("users").doc(this.props.id).get().then((doc) => {
            for (var key in doc.data().classes) {
                results[key] = doc.data().classes[key]
            }
        })
        await this.setState({ data: [results] })
        console.log(this.state.data[0])


    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map(key => (
                        <li>
                            {JSON.stringify(key)}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PoolClasses;