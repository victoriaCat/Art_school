import axios from 'axios';

import {IMGS_API, WORKSHOPS_API} from '~/libs/api';

export const fetchImages = (path, type) => async dispatch => {
    let payload = [];
    let isLoading = true;
    try {
        const response = await axios.get(`${IMGS_API}${path}`);

        payload = response.data.images;
        isLoading = false;
    } catch (e) {
        console.error(e);
    }

    dispatch({
        type,
        payload,
        isLoading,
    });
};

export const fetchWorkshops = (path, type) => async dispatch => {
    let payload = [];
    let isLoading = true;
    try {
        const response = await axios.get(`${WORKSHOPS_API}${path}`);

        payload = response.data.data;
        isLoading = false;
    } catch (e) {
        console.error(e);
    }

    dispatch({
        type,
        payload,
        isLoading,
    });
};