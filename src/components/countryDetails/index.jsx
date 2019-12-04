import React, { useEffect, useState } from 'react'
import { useRouteMatch } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";
import store from "../../store";
import axios from 'axios';

export default function CountryDetails(props) {
    const match = useRouteMatch("/:id")
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const data = await axios(`https://restcountries.eu/rest/v2/alpha/${match.params.id}`, );
            setCountry(data.data)
        }
        fetchCountries();
    }, [match.params.id]);
    
    console.log(country)
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
        if(localStorage.theme === "light-theme") {
            return {
                backgroundColor: store.getState().themeReducer.lightTheme.elements
            } 
        } else {
            return {
                backgroundColor: store.getState().themeReducer.darkTheme.elements
            }
        }
    }

    
    return (
        <div id={"details-page"}>
            <Link to={"/"}>
                <div id={"button-to-home"} className={"square-element"} style={elementBackground()}>
                    <div id={"arrow-back"}>
                        <svg viewBox={"0 0 30 30"}>
                        <path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
	c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
	c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
                        </svg>
                    </div>
                    <p>Back</p>
                </div>
            </Link>
            <img src={country.flag} alt={country.name}/>
            <div className={"first-list"}>
                <h1>{country.name}</h1>
                <ul>
                    <li><span>Native name:</span>{country.nativeName}</li>
                    <li><span>Population:</span>{country.population}</li>
                    <li><span>Region:</span> {country.region}</li>
                    <li><span>Sub Region:</span> {country.subregion}</li>
                    <li><span>Capital:</span> {country.capital}</li>
                </ul>
            </div>
            <div className={"second-list"}>
                <ul>
                    <li><span>Top level domain:</span> {country.capital}</li>
                    <li><span>Currencies:</span> {formsStrArray(country.currencies)}</li>
                    <li><span>Languages:</span> {formsStrArray(country.languages)}</li>
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
