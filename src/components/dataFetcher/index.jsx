import React, { Component } from 'react';
import store from "../../store"

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
                this.state.countries.map( country => {
                    return (
                        <div className="cards">
                            <h1>{country.name}</h1>
                        </div>
                    )
                })
                
        )
    }
}

export default DataFetcher;