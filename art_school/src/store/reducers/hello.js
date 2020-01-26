import {SET_HELLO} from "../actionTypes";

const initialState = '';

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_HELLO:
            return action.payload;

        default:
            return state;
    }
};