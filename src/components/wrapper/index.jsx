import React, { Component } from 'react';
import Navbar from "../navbar";
import SearchInput from "../searchInput";
import "./style.css";
import store from "../../store";

class Wrapper extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            theming: "light-theme"
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
                <SearchInput />
            </div>
        );
    }
}

export default Wrapper;
