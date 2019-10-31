import React, { Component } from 'react';
import searchIcon from '../../img/svg/search.svg';
import "./style.css";

class SearchInput extends Component {
    render() {
        return (
            <div className={"outerInput"}>
                <img className={"searchIcon"} src={searchIcon} alt={"search-icon"}></img>
                <input type={"text"} className={"searchInput"} placeholder={"Search for a country..."}></input>
            </div>
        )
    }
}

export default SearchInput;