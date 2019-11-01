import React, { Component } from 'react';
import "./style.css"

class DataFetcher extends Component {
    state = {
        error: null,
        isLoaded: false,
        countries: [],
        query: "name/"
    }

        
    componentWillReceiveProps() {
        this.setState({
            query: `name/${this.props.query}`
        });

        fetch(`https://restcountries.eu/rest/v2/${this.state.query}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                countries: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }
        
        render() {
            return (
                <div className="cards">
                    {this.state.countries.map( country => {
                        return (
                            <div className="card">
                                <img className={"flags"} src={country.flag} alt={"flag"}></img>
                                <h1 className={"country-name"}>{country.name}</h1>
                            </div>
                        )
                    })}
                </div>
        )
    }
}

export default DataFetcher;