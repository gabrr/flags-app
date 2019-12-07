import { combineReducers } from "redux";
import themeReducer from "./themingReducer";
import fetcher from "./fetcher";
import countryIndex from "./countryClicked"

export default combineReducers({
    themeReducer,
    fetcher,
    countryIndex
});