import axios from 'axios';

import { FETCH_MAIN_SLIDER_IMAGES } from "./actionTypes";

/*
* Загрузим коллекцию с url-ами картинок.
* Если не смогли загрузить, то будем показывать preloader
* */
export const fetchMainSliderImages = () => async dispatch => {
    let payload = [];
    let isLoading = true;

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');

        payload = response.data;
        isLoading = false;
    } catch (e) {
        console.error(e);
    }

    dispatch({
        type: FETCH_MAIN_SLIDER_IMAGES,
        payload,
        isLoading,
    });
};
