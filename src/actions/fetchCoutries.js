export const fetchAction = (countries) => {
    return {
        type: "FETCH_COUNTRIES",
        countries
    }
}

export const fetchErrorAction = (err) => {
    return {
        type: "ERROR_FETCHING",
        err
    }
}

export default { fetchAction, fetchErrorAction };