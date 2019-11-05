import React, { Component } from 'react'
// import store from "../../store"


class RegionFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: "region/americas",
            regions: [
                "americas",
                "asia",
                "europe",
                "africa",
                "oceania"
            ]
        }
    }
    
    render() {
        return (
            <div id="region-filter">
                <ul>
                    {console.log(this.props.state)}
                    {this.state.regions.map( x => {
                        return <li onClick={this.props.region} key={x}>{x}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default RegionFilter;