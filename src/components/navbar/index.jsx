import React, { Component } from 'react';
import "./style.css";

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li className="title">Where in the world?</li>
                    <li className="light-toggle">Night Mode</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
