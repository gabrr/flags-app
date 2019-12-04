import React, { Component } from 'react';
import Navbar from "../navbar";
import SearchInput from "../searchInput";
import "./style.css";
import store from "../../store";
import CountriesDetails from "../countryDetails"
import {
    BrowserRouter as 
    Switch,
    Route
  } from "react-router-dom";

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
        if(!localStorage.theme) {
            localStorage.setItem("theme", "dark-theme")
        } else if(localStorage.theme === "light-theme") {
            localStorage.setItem("theme", "dark-theme")
        } else {
            localStorage.setItem("theme", "light-theme")
        }
    }
    render() {
        return (
            <div id="wrapper" className={localStorage.theme}>
                <Navbar setTheme={this.setTheme} />
                <Switch>
                    <Route exact path={"/"}>
                        <SearchInput />
                    </Route>
                    <Route path={"/:id"}>
                        <CountriesDetails />
                    </Route>       
                </Switch>
            </div>
        );
    }
}

export default Wrapper;
