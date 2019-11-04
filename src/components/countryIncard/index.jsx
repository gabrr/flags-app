import React, { Component } from 'react';
import store from "../../store";
import { fetchCountries } from "../../actions";
import "./style.css"

class CountryInCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        }

    }
    

    render() {
        // setTimeout(
        //     function() {
        //         console.log(store.getState().fetching)
        //     },
        //     3000
        // )
        return (
            <div className="cards">
                {
                    // store.getState().countries.map( country => {
                    //     return (<div className="card" key={Math.random() * 1.3}>
                    //         <img className={"flags"} key={Math.random() * 1.3} src={country.flag} alt={"flag"}></img>
                    //         <h1 className={"country-name"} key={Math.random() * 1.3}>{country.name}</h1>
                    //         </div>
                    //     )
                    // })
                } 
            </div>
        )
    }
}

export default CountryInCards;