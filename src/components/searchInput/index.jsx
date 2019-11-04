import React, { Component } from 'react';
import searchIcon from '../../img/svg/search.svg';
import "./style.css";
import store from "../../store";
// import { addindCountryAction } from '../../actions';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "region/oceania",
            theme: "light-theme",
            countries: [],
            isLoaded: false,
            error: null
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitting = this.submitting.bind(this);
        this.theming = this.theming.bind(this);
        // this.fetching = this.fetching.bind(this)
    }

    changeHandler(e) {
        if(e.target.value === "") {
            this.setState({
                inputValue: "region/oceania"
            })    
        } else {
            this.setState({
                inputValue: `name/${e.target.value}`
            })
        }
        
    }
    
    // fetching() {
    //     fetch(`https://restcountries.eu/rest/v2/${this.state.inputValue}`)
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             //the status is only set when data isn't fetched.
    //             if(result.status) {
    //                 //sending data to the store redux.
    //                 console.log(result);
    //                 store.dispatch(addindCountryAction([{name: `No country found, check your spelling and try again :)`}]
    //                 ));
    //             } else {
    //                 console.log(result);
    //                 store.dispatch(addindCountryAction(result))
    //             }
    //         },
    //         (error) => {
    //             console.log(error)
    //         }
    //         )
    //     }
        
    // componentDidMount() {
    //     // this.fetching();
    // }

    submitting(event) {
        console.log(store.getState())
        event.preventDefault();
    }
    
    theming() {
        if(store.getState().themeMode.theming === "light-theme"){
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
            </form>    
        )
    }
}

export default SearchInput;