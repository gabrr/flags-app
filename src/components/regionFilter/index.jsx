import React, { Component } from 'react'
import downArrow from "../../img/svg/down-arrow.svg"
import lightDownArrow from "../../img/svg/light-down-arrow.svg"
import "./style.css"
import store from "../../store"


class RegionFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: "region/americas",
            regions: [
                "Africa",
                "Americas",
                "Asia",
                "Europe",
                "Oceania"
            ]
        }
    }
    
    downArrowTheme() {
        if(store.getState().theming === "light-theme") {
            return downArrow;
        } else {
            return lightDownArrow;
        }
    }

    btRegionTheme() {
        if(store.getState().theming === "light-theme") {
            return {
                backgroundColor: store.getState().lightTheme.elements,
            }
        } else {
            return {
                backgroundColor: store.getState().darkTheme.elements
            }
        }
    }

    render() {
        return (
            <div id="region-filter">
                <div id="show-regions-bt" style={this.btRegionTheme()}>
                    <p>Filter by region</p>
                    <img id={"down-arrow"} src={this.downArrowTheme()} alt={"down arrow"}/>
                </div>
                <ul>
                    {this.state.regions.map( x => {
                        return <li onClick={this.props.region} key={x}>{x}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default RegionFilter;