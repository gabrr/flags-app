import React, { Component } from 'react';
import searchIcon from '../../img/svg/search.svg';
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
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitting = this.submitting.bind(this);
        this.theming = this.theming.bind(this);
        this.fethingData = this.fethingData.bind(this);
        this.regionSetter = this.regionSetter.bind(this);
    }

    changeHandler(e) {
        if(e.target.value === "") {
            this.setState({
                inputValue: `region/americas`
            })    
        } else {
            this.setState({
                inputValue: `name/${e.target.value}`
            })
        }
        
    }
    
    
    fethingData() {
        fetch(`https://restcountries.eu/rest/v2/${this.state.inputValue}`)
        .then(res => res.json())
        .then(
            (result) => {
                if(result.status) {
                    this.setState({
                        isLoaded: true,
                        countries: [{name: `No country found, check your spelling and try again :)`}]
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
        
    componentDidMount() {
        this.fethingData();
    }

    submitting(event) {
        this.fethingData();
        event.preventDefault();
    }
    
    theming() {
        if(store.getState().theming === "light-theme"){
            return "light-theme"
        } else {
            return "dark-theme" 
        }
    }

    regionSetter(region) {
        this.setState({
            inputValue: `region/${region.target.innerHTML}`
        })
    }

    render() {
        return (
            <form onSubmit={this.submitting}>
                    <div className={"outerInput"}>
                        <img onClick={this.submitting} className={"searchIcon"} src={searchIcon} alt={"search-icon"}></img>
                        <input onChange={this.changeHandler} type={"text"} className={`searchInput ${this.theming()}`} placeholder={"Search for a country..."}></input>
                    </div>
                    <RegionFilter state={this.state} region={this.regionSetter} />
                    <CountryInCards query={this.state} />
            </form>    
        )
    }
}

export default SearchInput;