import { createStore } from "redux";
import {combineReducers} from "redux";
import {themeReducer} from "../reducers";
// import {countriesReducers} from "../reducers";
import { fetchingReducers } from "../reducers";

const allReducers = {
    themeMode: themeReducer,
    // countries: countriesReducers,
    fetching: fetchingReducers
}

const reducer = combineReducers(allReducers);

const store = createStore(reducer);

export default store;
