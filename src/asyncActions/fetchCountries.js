import axios from "axios";
import { fetchAction, fetchErrorAction } from "../actions/fetchCoutries"

//getting countries from an API
const fetchData = (query) => {
    return function(dispatch) {
        axios.get(`https://restcountries.eu/rest/v2/${query}`)
            .then(response => {
                const countries = response.data
                dispatch(fetchAction(countries))
            })
            .catch(err => {
                dispatch(fetchErrorAction(err))
            })
    }
}

export default fetchData;