import { createStore } from "redux";

const INITIAL_STATE = {
    theming: "light-theme"
};


function themeReducer(state = INITIAL_STATE, action) {
    if(action.type === "THEME_MODE" && state.theming === "light-theme") {
        return {
            theming: "dark-theme"
        }
    } 
    return  {
        theming: "light-theme"
    }
}

const store = createStore(themeReducer);

export default store;
