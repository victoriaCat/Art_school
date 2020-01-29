import axios from 'axios';

import { FETCH_MAIN_SLIDER_IMAGES } from "./actionTypes";

export const fetchMainSliderImages = () => async dispatch => {
    const response = await axios.get('https://pushkareva.art/gallery/api/main_slider_album');

    dispatch({
        type: FETCH_MAIN_SLIDER_IMAGES,
        payload: response.data.images
    });
};