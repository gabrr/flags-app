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

        this.moonMode = this.moonMode.bind(this);
        this.navbarBackground = this.navbarBackground.bind(this);
        this.setTheme = this.setTheme.bind(this);

    }
            
    moonMode() {
        let moon = document.getElementsByClassName("moon-icon");
        
        if(store.getState().theming === "dark-theme") {
            moon[1].style.display = "none";
            moon[0].style.display = "block";
        } else {
            moon[0].style.display = "none";
            moon[1].style.display = "block";
        }
    }

    setTheme() {
        this.props.setTheme();
        this.moonMode();
    }

    navbarBackground() {
        if(store.getState().theming === "light-theme") {
            return {backgroundColor: store.getState().lightTheme.elements}
        } else {
            return {backgroundColor: store.getState().darkTheme.elements}
        }
    }

    render() {
        return (
            <div id="navbar" style={this.navbarBackground()}>
                <ul>
                    <li className="title">Where in the world?</li>
                    <li onClick={this.setTheme} className="light-toggle"><img className={"moon-icon"} src={darkMoon} alt={"moon"} /><img className={"moon-icon"} src={lightMoon} alt={"moon"} />Dark Mode</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
