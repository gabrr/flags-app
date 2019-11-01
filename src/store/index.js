import { createStore } from "redux";

const INITIAL_STATE = {
    theming: "light-theme",
    darkTheme: {
            elements: "hsl(209, 23%, 22%)",
            input: "hsl(0, 0%, 100%)",
            background: "hsl(207, 26%, 17%)",
            text: "hsl(0, 0%, 100%)",
        },
    lightTheme: {
        elements: "hsl(0, 0%, 100%)",
        input: "hsl(0, 0%, 52%)",
        background: "hsl(0, 0%, 98%)",
        text: "hsl(200, 15%, 8%)"
    }
};


function themeReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "THEME_MODE":
            if(state.theming === "light-theme") {
                return {...state, theming: "dark-theme"};
            } else {
                return  {...state, theming: "light-theme"};
            }
        case "COUNTRY_SEARCHED":
            return  {...state, countrySearched: action.searched};
        default:
            return state;
    }

}

const store = createStore(themeReducer);

export default store;
