import React, { Component } from 'react';
import searchIcon from '../../img/svg/search.svg';
import store from "../../store";
import "./style.css";
import DataFetcher from '../dataFetcher';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
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

    submitting(event) {
        this.setState({
            countrySearched: this.state.inputValue
        });
        event.preventDefault();
    }
    
    theming() {
        if(store.getState().theming === "light-theme"){
            return "light-theme"
        } else {
            return "dark-theme" 
        }
    }

    render() {
        return (
            <form onSubmit={this.submitting}>
                    <div className={"outerInput"}>
                        <img onClick={this.submitting} className={"searchIcon"} src={searchIcon} alt={"search-icon"}></img>
                        <input onChange={this.changeHandler} type={"text"} className={`searchInput ${this.theming()}`} placeholder={"Search for a country..."}></input>
                    </div>
                    <DataFetcher query={this.state.inputValue} />
            </form>    
        )
    }
}

export default SearchInput;