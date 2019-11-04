import React, { Component } from 'react'
// import store from "../../store"


class RegionFilter extends Component {
    render() {
        return (
            <div id="region-filter">
                <ul>
                    <li value={"Africa"}>Africa</li>
                    <li value={"America"}>America</li>
                    <li value={"Asia"}>Asia</li>
                    <li value={"Europa"}>Europe</li>
                    <li value={"Oceania"}>Oceania</li>
                </ul>
            </div>
        )
    }
}

export default RegionFilter;