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
    },
    mainOptionsImages: {
        isLoading: true,
        payload: []
    }
};

export default (state = initialState, {type, isLoading, payload}) => {
    const stateKey = ({
        FETCH_MAIN_SLIDER_IMAGES: 'mainSliderImages',
        FETCH_MAIN_CAROUSEL_IMAGES_STUDENTS: 'carouselStudentsImages',
        FETCH_MAIN_CAROUSEL_IMAGES_WORKS: 'carouselWorksImages',
        FETCH_MAIN_OPTIONS_IMAGES: 'mainOptionsImages',
    })[type];

    if (stateKey) {
        return {
            ...state, [stateKey]: {
                isLoading,
                payload
            }
        };

    } else {
        return state;
    }
};