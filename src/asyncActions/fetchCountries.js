import axios from "axios";
import { fetchAction, fetchErrorAction, fetchByQuery } from "../actions/fetchCoutries"

//getting countries from an API
const fetchData = (query) => {
    return function(dispatch) {
        axios.get(`https://restcountries.eu/rest/v2/${query}`)
            .then(response => {
                const countries = response.data
                if (query !== "all") {
                    // here we are going to have countries filtered by queries
                    dispatch(fetchByQuery(countries))
                } else {
                    // this stores all countries
                    dispatch(fetchAction(countries))
                }
            })
            .catch(err => {
                dispatch(fetchErrorAction(err))
            })
    }
}

export default fetchData;