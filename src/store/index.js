import { createStore } from "redux";

const INITIAL_STATE = {
    data: [
        'react js',
        'patter design'
    ],
};

function courses(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_COURSE':
            return {data: [...state]};
        default:
            return state;
    }
}

const store = createStore(courses);

export default store;
