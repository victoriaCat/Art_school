import axios from 'axios';

import { FETCH_MAIN_SLIDER_IMAGES } from "./actionTypes";

export const fetchMainSliderImages = () => async dispatch => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');

    dispatch({
        type: FETCH_MAIN_SLIDER_IMAGES,
        payload: response.data
    });
};