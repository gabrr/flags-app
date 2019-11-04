//actions for redux
export function themeAction() {
    return {
        type: "THEME_MODE"
    }
}

// export function addindCountryAction(countries) {
//     return {
//         type: "ADD_COUNTRY_COLLEC",
//         countries
//     }
// }

export function fetcher(search) {
    fetch(`https://restcountries.eu/rest/v2/${search}`)
        .then(res => res.json())
        .then(
            (result) => {
                //the status is only set when data isn't fetched.
                if(result.status) {
                    dispatch({
                        type: "FETCH_COUNTRIES",
                        countries: [{name: "not this time"}], 
                        query: search
                    })
                } else {
                    dispatch({
                        type: "FETCH_COUNTRIES",
                        countries: result, 
                        query: search
                    })
                }
            },
            (error) => {
                console.log(error)
            }
        )
}

// export function fetchCountries(query) {
//     fetcher(query);
//     return {
//         type: "FETCH_COUNTRIES",
//         query
//     }
    
// } 


// return {
//     type: "FETCH_COUNTRIES",
//     countries, 
//     query
// }
