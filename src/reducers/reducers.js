import { combineReducers } from "redux";
import themeReducer from "./themingReducer";
import fetcher from "./fetcher";

export default combineReducers({
    themeReducer,
    fetcher
});