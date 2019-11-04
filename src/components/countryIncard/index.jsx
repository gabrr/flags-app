import React, { Component } from 'react';
import "./style.css"

class CountryInCards extends Component {
    render() {
        return (
            <div className="cards">
                {this.props.query.countries.map( country => {
                    return (
                        <div className="card" key={Math.random() * 1.3}>
                            <img className={"flags"} key={Math.random() * 1.3} src={country.flag} alt={"flag"}></img>
                            <h1 className={"country-name"} key={Math.random() * 1.3}>{country.name}</h1>
                        </div>
                    )
                })} 
            </div>
        )
    }
}

export default CountryInCards;