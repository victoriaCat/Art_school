import axios from 'axios';

import {IMGS_API} from '~/libs/api';
import {
    FETCH_MAIN_SLIDER_IMAGES,
    FETCH_MAIN_CAROUSEL_IMAGES_STUDENTS,
    FETCH_MAIN_CAROUSEL_IMAGES_WORKS
} from './actionTypes';

/*
* Загрузим коллекцию с id и именами картинок для слайдра на MainPage.
* Если не смогли загрузить, то будем показывать preloader
* */
export const fetchMainSliderImages = () => async dispatch => {
    let payload = [];
    let isLoading = true;

    try {
        const response = await axios.get(`${IMGS_API}main_slider`);

        payload = response.data.images;
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

/*
* Загрузим коллекцию с id и именами картинок для карусели с учениками на MainPage.
* Если не смогли загрузить, то будем показывать preloader
* */
export const fetchMainCarouselStudentsImages = () => async dispatch => {
    let payload = [];
    let isLoading = true;

    try {
        const response = await axios.get(`${IMGS_API}main_carousel_students`);

        payload = response.data.images;
        isLoading = false;
    } catch (e) {
        console.error(e);
    }

    dispatch({
        type: FETCH_MAIN_CAROUSEL_IMAGES_STUDENTS,
        payload,
        isLoading,
    });
};

/*
* Загрузим коллекцию с id и именами картинок для карусели с работами на MainPage.
* Если не смогли загрузить, то будем показывать preloader
* */
export const fetchMainCarouselWorksImages = () => async dispatch => {
    let payload = [];
    let isLoading = true;

    try {
        const response = await axios.get(`${IMGS_API}main_carousel_works`);

        payload = response.data.images;
        isLoading = false;
    } catch (e) {
        console.error(e);
    }

    dispatch({
        type: FETCH_MAIN_CAROUSEL_IMAGES_WORKS,
        payload,
        isLoading,
    });
};