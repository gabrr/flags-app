import React, { Component } from 'react';
import "./style.css"

class CountryInCards extends Component {

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        return (
            <div className="#cards">
                {this.props.query.countries.map( country => {
                    return (
                        <div className="card" key={Math.random() * 1.3}>
                            <img className={"flags"} key={Math.random() * 1.3} src={country.flag} alt={"flag"}></img>
                            <h1 className={"country-name"} key={Math.random() * 1.3}>{country.name}</h1>
                            <ul class={"countries-details"}>
                                <li><span>Population:</span> {this.numberWithCommas(country.population)}</li>
                                <li><span>Region:</span> {country.region}</li>
                                <li><span>Capital:</span> {country.capital}</li>
                            </ul>
                        </div>
                    )
                })} 
            </div>
        )
    }
}

export default CountryInCards;