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
    componentDidMount() {
        this.moonMode();
    } 
    moonMode() {
        let moon = document.getElementsByClassName("moon-icon");
        
        if(localStorage.theme === "dark-theme") {
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
        if(localStorage.theme === "light-theme") {
            document.body.style.backgroundColor = store.getState().themeReducer.lightTheme.background
            document.body.style.color = store.getState().themeReducer.lightTheme.text
            return {
                backgroundColor: store.getState().themeReducer.lightTheme.elements, 
                transition: "background-color 200ms linear 20ms",
                color: store.getState().themeReducer.lightTheme.text
            }
        } else {
            document.body.style.backgroundColor = store.getState().themeReducer.darkTheme.background
            document.body.style.color = store.getState().themeReducer.darkTheme.text
            return {
                backgroundColor: store.getState().themeReducer.darkTheme.elements, 
                transition: "background-color 200ms linear 20ms",
                color: store.getState().themeReducer.darkTheme.text
            }
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
