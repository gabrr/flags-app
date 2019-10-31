import React, { Component } from 'react';
import Navbar from "../navbar/index"
import "./style.css";
import store from "../../store/index";


class Wrapper extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            theming: ""
        }
        this.setTheme = this.setTheme.bind(this);
    }
    
    setTheme() {
        store.dispatch({type: "THEME_MODE"});
        this.setState({
            theming: store.getState().theming
        })
    }
    render() {
        return (
            <div id="wrapper" className={this.state.theming}>
                <Navbar setTheme={this.setTheme} />
                <p>hey there </p>
            </div>
        );
    }
}

export default Wrapper;

    // darkTheme: {
    //     elements: "hhsl(209, 23%, 22%)",
    //     background: "hsl(207, 26%, 17%)",
    //     text: "hsl(0, 0%, 100%)",
    // },
    // lightTheme: {
    //     elements: "hsl(0, 0%, 52%)",
    //     background: "hsl(0, 0%, 98%)",
    //     text: "#333"
    // }