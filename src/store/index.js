import { createStore } from "redux";

const INITIAL_STATE = {
    data: [
        'react js',
        'patter design'
    ],
};

const courses = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "add_user":
            return state = {...state};
        default:
            return state;
    }
}

const store = createStore(courses);

export default courses;
