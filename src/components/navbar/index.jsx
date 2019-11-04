import React, { Component } from 'react';
import "./style.css";
import lightMoon from "../../img/svg/light-moon.svg";
import darkMoon from "../../img/svg/dark-moon.svg";
import store from "../../store/index";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theming: ""
        };

        this.MoonMode = this.MoonMode.bind(this);
        this.navbarBackground = this.navbarBackground.bind(this)
    }
            
    MoonMode() {
        if(store.getState().themeMode.theming === "light-theme") {
            return lightMoon
        } else {
            return darkMoon
        }
    }

    navbarBackground() {
        if(store.getState().themeMode.theming === "light-theme") {
            return {backgroundColor: store.getState().themeMode.lightTheme.elements}
        } else {
            return {backgroundColor: store.getState().themeMode.darkTheme.elements}
        }
    }

    render() {
        return (
            <div id="navbar" style={this.navbarBackground()}>
                <ul>
                    <li className="title">Where in the world?</li>
                    <li onClick={this.props.setTheme} className="light-toggle"><img className={"moon-icon"} src={this.MoonMode()} alt={"moon"} />Dark Mode</li>
                </ul>
            </div>
        );
    }
}


export default Navbar;
