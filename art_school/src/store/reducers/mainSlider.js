import {FETCH_MAIN_SLIDER_IMAGES} from "../actionTypes";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MAIN_SLIDER_IMAGES:
            return action.payload;

        default:
            return state;
    }
};