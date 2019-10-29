import React, { Component } from 'react';
import "./style.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="navbar">
                <ul>
                    <li className="title">Where in the world?</li>
                    <li onClick={this.props.theming} className="light-toggle">Night Mode</li>
                </ul>
            </div>
        );
    }
}


export default Navbar;
