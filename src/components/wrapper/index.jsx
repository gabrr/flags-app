import React, { Component } from 'react';
import "./style.css";
import store from "../../store";
import { addindCountryAction } from "../../actions";
import Navbar from "../navbar";
import SearchInput from "../searchInput";
import CountryInCards from "../countryIncard";

class Wrapper extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            inputValue: "region/oceania",
            theming: "light-theme"
        }
        this.setTheme = this.setTheme.bind(this);
        // this.fetching = this.fetching.bind(this);
    }

    // fetching() {
    //     fetch(`https://restcountries.eu/rest/v2/${this.state.inputValue}`)
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             //the status is only set when data isn't fetched.
    //             if(result.status) {
    //                 //sending data to the store redux
    //                 store.dispatch(addindCountryAction([{name: `No country found, check your spelling and try again :)`}]
    //                 ));
    //             } else {
    //                 store.dispatch(addindCountryAction(result))
    //             }
    //         },
    //         (error) => {
    //             console.log(error)
    //         }
    //         )
    //     }
    

    setTheme() {
        store.dispatch({type: "THEME_MODE"});
        this.setState({
            theming: store.getState().themeMode.theming
        })
    }
    render() {
        return (
            <div id="wrapper" className={this.state.theming}>
                <Navbar setTheme={this.setTheme} />
                <SearchInput countries={this.fetching} />
                <CountryInCards />
            </div>
        );
    }
}

export default Wrapper;
