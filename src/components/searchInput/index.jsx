import React, { Component } from 'react';
import "./style.css";

class SearchInput extends Component {
    render() {
        return (
            <React.Fragment>
                <input type={"text"} className={"searchInput"} placeholder={"Search for a country..."}></input>
            </React.Fragment>
        )
    }
}

export default SearchInput;