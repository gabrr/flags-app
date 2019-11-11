import React, { useEffect } from 'react'
import { useRouteMatch } from "react-router-dom";
import "./style.css";

export default function CountryDetails(props) {
    const match = useRouteMatch("/:id")

    useEffect(() => {
        getCountryDetails();
    });

    const getCountryDetails = async () => {
        const data = await fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id}`)

        const country = await data.json()

        console.log(country)

    }

    return (
        <div id={"details"}>
            <h1>This is details for {match.params.id}</h1>     
        </div>
    )
}

