import React, { Component } from 'react';
import "./style.css"

class CountryInCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    numberWithCommas(x) {
        if(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }   
        return null
    }

    render() {
        if(this.props.state.isLoaded === false) {
            return (
                <div id="loading">
                    <div className="circles">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>
            )
            
        } else if(this.props.query.countries[0].name === "none found") {
            return (
                <div className={"nothingFound"}>
                    <h1>Please accept our apologies,<br/> We couldn't find a country named {this.props.state.countryName}. Try another one ;)</h1>
                </div>
            )
        } else {
            return (
                <div className="#cards">
                    {this.props.query.countries.map( country => {
                            return (
                                <div className="card" key={country.name}>
                                    <img className={"flags"} key={country.numericCode} src={country.flag} alt={"flag"}></img>
                                    <h1 className={"country-name"} key={country.area}>{country.name}</h1>
                                    <ul className={"countries-details"}>
                                        <li><span>Population:</span> {this.numberWithCommas(country.population)}</li>
                                        <li><span>Region:</span> {country.region}</li>
                                        <li><span>Capital:</span> {country.capital}</li>
                                    </ul>
                                </div>
                                
                            )
                        }
                    )} 
                </div>
            )
        }
    }
}

export default CountryInCards;