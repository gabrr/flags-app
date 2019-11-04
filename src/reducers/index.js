const THEME_STATE = {
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

//reducer for dark and light mode
export function themeReducer(state = THEME_STATE, action) {
    switch(action.type) {
        case "THEME_MODE":
            if(state.theming === "light-theme") {
                return {...state, theming: "dark-theme"};
            } else {
                return  {...state, theming: "light-theme"};
            }
        default:
            return state;
    }
}

// //reducer to add country to the app
// export function countriesReducers(state = [], action) {
//     switch(action.type) {
//         case "ADD_COUNTRY_COLLEC":
//             return state = action.countries;
//         default:
//             return state;
//     }
// }

//reducer to fetch countries to the app
export function fetchingReducers(state = [], action) {
    switch(action.type) {
        case "FETCH_COUNTRIES":
            return state = [action];
        default:
            return state;
    }
}