const initialState = {
    aboutMeImages: {
        isLoading: true,
        payload: []
    },
    carouselMyWorksImages: {
        isLoading: true,
        payload: []
    }
};

export default (state = initialState, {type, isLoading, payload}) => {
    const stateKey = ({
        FETCH_ABOUT_ME_IMAGES: 'aboutMeImages',
        FETCH_CAROUSEL_IMAGES_MY_WORKS: 'carouselMyWorksImages',

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