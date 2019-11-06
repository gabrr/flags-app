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
            ],
            buttonClicked: false
        }

        this.showList = this.showList.bind(this)
    }
    
    downArrowTheme() {
        if(store.getState().theming === "light-theme") {
            return downArrow;
        } else {
            return lightDownArrow;
        }
    }

    showList() {
        let regionsCard = document.getElementById("regions-list");
        let downArrowAnimated = document.getElementById("down-arrow");

        if(!this.state.buttonClicked) {
            regionsCard.style.display = "block"
            this.setState({
                buttonClicked: true,
            })

            downArrowAnimated.animate([
                // keyframes
                { transform: 'translateY(-5%)' }, 
                { transform: 'translateY(-50%)' }
              ], { 
                // timing options
                duration: 200,
              })

        } else {
            regionsCard.style.display = "none"
            this.setState({
                buttonClicked: false,
            })

            downArrowAnimated.animate([
                // keyframes
                { transform: 'translateY(-80%)' }, 
                { transform: 'translateY(-50%)' }
              ], { 
                // timing options
                duration: 200,
              })
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
                <div id="show-regions-bt" onClick={this.showList} style={this.btRegionTheme()}>
                    <p>Filter by region</p>
                    <img id={"down-arrow"} src={this.downArrowTheme()} alt={"down arrow"}/>
                </div>
                <ul id={"regions-list"} style={this.btRegionTheme()}>
                    {this.state.regions.map( x => {
                        return <li onClick={this.props.region} key={x}>{x}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default RegionFilter;