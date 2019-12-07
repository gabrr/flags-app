import React from 'react'
import "./style.css";
import store from "../../store";

export default function CountryDetails(props) {

    const index = window.location.pathname.split("/")[2];
    const countryChosen = store.getState().fetcher.countries[index]
    
    //formating the strings in a object, joining the values by comma
    const formsStrArray = (array) => {
        if(array) {
            const coinsName = array.map(x => x.name ? x.name : "")
            const string = coinsName.join(", ") 
            return string
        }
    }

    //toggling the background theme 
    const elementBackground = () => {
        if(localStorage.theme === "dark-theme") {
            return {
                backgroundColor: store.getState().themeReducer.darkTheme.elements
            }
        } else {
            return {
                backgroundColor: store.getState().themeReducer.lightTheme.elements
            } 
        }
    }

    const backToHome = () => {
        window.history.back();
    }

    const svgTheme = () => {
        if(localStorage.theme === "dark-theme") {
            return store.getState().themeReducer.darkTheme.text
        } else {
            return store.getState().themeReducer.lightTheme.text
        }
    }

    return (
        <div id={"details-page"}>
                <div id={"button-to-home"} onClick={backToHome} className={"square-element"} style={elementBackground()}>
                    <div id={"arrow-back"}>
                        <svg viewBox={"0 0 30 30"} fill={svgTheme()}>
                        <path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
	c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
	c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
                        </svg>
                    </div>
                    <p>Back</p>
                </div>
            <img src={countryChosen.flag} alt={countryChosen.name}/>
            <div className={"first-list"}>
                <h1>{countryChosen.name}</h1>
                <ul>
                    <li><span>Native name:</span>{countryChosen.nativeName}</li>
                    <li><span>Population:</span>{countryChosen.population}</li>
                    <li><span>Region:</span> {countryChosen.region}</li>
                    <li><span>Sub Region:</span> {countryChosen.subregion}</li>
                    <li><span>Capital:</span> {countryChosen.capital}</li>
                </ul>
            </div>
            <div className={"second-list"}>
                <ul>
                    <li><span>Top level domain:</span> {countryChosen.capital}</li>
                    <li><span>Currencies:</span> {formsStrArray(countryChosen.currencies)}</li>
                    <li><span>Languages:</span> {formsStrArray(countryChosen.languages)}</li>
                </ul>
            </div>  
            <div className={"countries-border-row"}>
                <span>Border countries:</span>
                <ul>
                    <li className={"square-element"}>Brazil</li>
                    <li className={"square-element"}>Argentina</li>
                    <li className={"square-element"}>Paraguay</li>
                    <li className={"square-element"}>Paraguay</li>
                </ul>
            </div>
        </div>
    )
}
