import React from 'react'
import { useRouteMatch } from "react-router-dom";

export default function CountryDetails(props) {
    const match = useRouteMatch("/:id")

    console.log(props)

    return (
        <div>
            <h1>This is details for {match.params.id}</h1>     
        </div>
    )
}

