import {
    FETCH_MAIN_SLIDER_IMAGES,
    FETCH_MAIN_CAROUSEL_IMAGES_STUDENTS,
    FETCH_MAIN_CAROUSEL_IMAGES_WORKS
} from './actionTypes';

const initialState = {
    mainSliderImages: {
        isLoading: true,
        payload: []
    },
    carouselStudentsImages: {
        isLoading: true,
        payload: []
    },
    carouselWorksImages: {
        isLoading: true,
        payload: []
    }
};

/*
* @TODO:
* Вожможно нужно добавить еще состояние hasError или что-то типа того, чтобы понимать когда не смогли загрузить данные.
* Сейчас будет висеть в isLoading = true, если не смогли загрузить.
* */
export default (state = initialState, {type, isLoading, payload}) => {
    const stateKey = ({
        FETCH_MAIN_SLIDER_IMAGES: 'mainSliderImages',
        FETCH_MAIN_CAROUSEL_IMAGES_STUDENTS: 'carouselStudentsImages',
        FETCH_MAIN_CAROUSEL_IMAGES_WORKS: 'carouselWorksImages',

    })[type];

    if (stateKey) {
        return {...state, [stateKey]: {
                isLoading,
                payload
            }};

    } else {
        return state;
    }
};