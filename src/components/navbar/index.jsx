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
                    <li className="light-toggle">Night Mode</li>
                    <button onClick={this.props.theming}>Turn on</button>
                </ul>
            </div>
        );
    }
}

export default Navbar;
