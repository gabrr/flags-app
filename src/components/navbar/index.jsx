import React, { Component } from 'react';
import "./style.css";
import store from "../../store/index";


class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="navbar">
                <ul>
                    <li className="title">Where in the world?</li>
                    <li onClick={this.props.setTheme} className="light-toggle">Night Mode</li>
                </ul>
            </div>
        );
    }
}


export default Navbar;
