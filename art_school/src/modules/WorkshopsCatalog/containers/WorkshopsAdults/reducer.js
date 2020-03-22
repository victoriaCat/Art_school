const initialState = {
    workshopsAdultsImages: {
        isLoading: true,
        payload: []
    }
};

export default (state = initialState, {type, isLoading, payload}) => {
    const stateKey = ({
        FETCH_WORKSHOPS_CATALOG_ADULTS_IMAGES: 'workshopsAdultsImages'
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