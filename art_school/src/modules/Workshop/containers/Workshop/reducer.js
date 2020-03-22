const initialState = {
    workshopPageImages: {
        isLoading: true,
        payload: []
    }
};

export default (state = initialState, {type, isLoading, payload}) => {
    const stateKey = ({
        FETCH_WORKSHOP_PAGE_IMAGES: 'workshopPageImages',
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