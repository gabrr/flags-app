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
    if(action.type === "THEME_MODE" && state.theming === "light-theme") {
        return {...state, theming: "dark-theme"};
    } 
    return  {...state, theming: "light-theme"};

}

const store = createStore(themeReducer);

export default store;
