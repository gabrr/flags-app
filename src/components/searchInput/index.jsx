import React, { Component } from 'react';
import store from "../../store";
import "./style.css";
import CountryInCards from '../countryIncard';
import RegionFilter from "../regionFilter";

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "region/oceania",
            theme: "light-theme",
            countries: [],
            isLoaded: false,
            error: null,
            countryName: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitting = this.submitting.bind(this);
        this.inputTheme = this.inputTheme.bind(this);
        this.fethingData = this.fethingData.bind(this);
        this.regionSetter = this.regionSetter.bind(this);
    }

    regionSetter(region) {
        this.setState({
            inputValue: `region/${region.target.innerHTML}`
        });
        this.fethingData(`region/${region.target.innerHTML}`)
    }

    changeHandler(e) {
        if(e.target.value === "") {
            this.setState({
                inputValue: `region/americas`
            })    
        } else {
            this.setState({
                inputValue: `name/${e.target.value}`,
                countryName: e.target.value
            })
        }
        
    }
    
    //to get countries from API
    fethingData(query) {
        this.setState({
            isLoaded: false,
        });
        fetch(`https://restcountries.eu/rest/v2/${query}`)
        .then(res => res.json())
        .then(
            (result) => {
                if(result.status) {
                    this.setState({
                        isLoaded: true,
                        countries: [{name: "none found"}]
                    });
                } else {
                    this.setState({
                        isLoaded: true,
                        countries: result
                    });    
                }
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )
        }

    
    
    //to load the data as soon as the component is loaded
    componentDidMount() {
        this.fethingData(this.state.inputValue);
    }

    searchIconAnim() {
        let SearchIconElem = document.getElementsByClassName("searchIcon")[0];
        SearchIconElem.animate([
            {transform: "translate(12px, -4px) scale(1.3)"},
            {transform: "translateX(15px"},

        ], {
            duration: 300
        })
    }
    
    //to load data on submitting the name searched
    submitting(event) {
        this.fethingData(this.state.inputValue);
        event.preventDefault();
        this.searchIconAnim();
    }
    
    //setting the theme for the 
    inputTheme() {
        var any = document.getElementsByClassName("searchInput");
        if(store.getState().theming === "light-theme"){
            if(any[0]) {
                any[0].className = "light-theme-holder searchInput";
            }

            return {
                backgroundColor: store.getState().lightTheme.elements,
                color: store.getState().lightTheme.text
            }
        } else { 
            if(any[0]) {
                any[0].className = "dark-theme-holder searchInput";
            }

            return {
                backgroundColor: store.getState().darkTheme.elements,
                color: store.getState().darkTheme.text
            }
        }
    }

    searchIconTheme() {
        if(store.getState().theming === "light-theme"){
            return store.getState().lightTheme.inputText
        } else {
            return store.getState().darkTheme.inputText
        }
    }


    render() {
        return (
            <form id={"form"} onSubmit={this.submitting}>
                    <div style={this.inputTheme()} className={"outerInput"}>
                            <svg onClick={this.submitting} fill={this.searchIconTheme()} className={"searchIcon"} viewBox={"0 0 30 30"}>
                                <path xmlns={"http://www.w3.org/2000/svg"} d={"M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735   c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0   c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46z    M18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0   C21.517,9.026,21.517,14.63,18.073,18.074z"}></path>
                            </svg>                        
                        <input onChange={this.changeHandler} type={"text"} className={"searchInput"} placeholder={"Search for a country..."}></input>
                    </div>
                    <RegionFilter state={this.state} region={this.regionSetter} />
                    <CountryInCards state={this.state} query={this.state} />
            </form>    
        )
    }
}

export default SearchInput;