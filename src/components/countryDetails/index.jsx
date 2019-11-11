import React, { useEffect, useState } from 'react'
import { useRouteMatch } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";

export default function CountryDetails(props) {
    const match = useRouteMatch("/:id")
    
    const [country, setCountry] = useState([]);
    const abortController = AbortController();
    const signal = abortController.signal;


    useEffect(() => {
        getCountryDetails();
    });
        
    const getCountryDetails = async () => {
        const data = await fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id}`, {signal: signal})
        const item  = await data.json();

        setCountry(item);    

        return function cleanup() {
            abortController.abort()
        }
    }



    
    return (
        <div id={"details"}>
            <Link to={"/"}>
                <div id={"button-to-home"}>Back</div>
            </Link>
            <h1>{country.name}</h1>     
        </div>
    )
}
