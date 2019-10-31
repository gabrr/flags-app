import React, { Component } from 'react';
import searchIcon from '../../img/svg/search.svg';
import store from "../../store";
import "./style.css";

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            countrySearched: "",
            theme: "light-theme"
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitting = this.submitting.bind(this);
        this.theming = this.theming.bind(this);
    }

    changeHandler(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    submitting(e) {
        if(e.key === "Enter") {
            this.setState({
                countrySearched: this.state.inputValue
            })
        } 
    }

    theming() {
        if(store.getState().theming === "light-theme"){
            return "light-theme"
        } else {
            return "dark-theme" 
        }
    }

    // navbarBackground() {
    //     if(store.getState().theming === ) {
    //         return {backgroundColor: store.getState().lightTheme.elements}
    //     } else {
    //         return {backgroundColor: store.getState().darkTheme.elements}
    //     }
    // }

    render() {
        return (
            <div className={"outerInput"}>
                <img className={"searchIcon"} src={searchIcon} alt={"search-icon"}></img>
                <input onKeyPress={this.submitting} onChange={this.changeHandler} type={"text"} className={`searchInput ${this.theming()}`} placeholder={"Search for a country..."}></input>
            </div>
        )
    }
}

export default SearchInput;