import React, { Component } from 'react';
import "./style.css"

class DataFetcher extends Component {
    state = {
        error: null,
        isLoaded: false,
        countries: [],
        query: "all"
    }

    // componentDidUpdate(prevProps) {
    //     if(prevProps.query !== this.props.query) {
    //         this.setState({
    //             query: `name/${this.props.query}`
    //         })
    //     }
    // }
    // shouldComponentUpdate(prevProps) {
    //     if(prevProps.query !== this.props.query) {
    //         this.setState({
    //             query: `name/${this.props.query}`
    //         })
    //     } 
    //     return null
    // }


    // componentDidMount() {
        
    // // }   
    // // static getDerivedStateFromProps(props, state) {
    // //     if (props.query.inputValue !== "") {
    // //       return {
    // //         query: `name/${props.query.inputValue}`,
    // //       };
    // //     }
    // //     return null;
    // // }    

    render() {
        return (
            <div className="cards">
                {console.log(this.props.query)}
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

export default DataFetcher;