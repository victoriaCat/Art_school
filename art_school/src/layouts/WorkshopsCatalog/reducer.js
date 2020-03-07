const initialState = {
    workshopsCatalogAdultsImages: {
        isLoading: true,
        payload: []
    },
    workshopsCatalogKidsImages: {
        isLoading: true,
        payload: []
    }
};

export default (state = initialState, {type, isLoading, payload}) => {
    const stateKey = ({
        FETCH_WORKSHOPS_CATALOG_ADULTS_IMAGES: 'workshopsCatalogAdultsImages',
        FETCH_WORKSHOPS_CATALOG_KIDS_IMAGES: 'workshopsCatalogKidsImages'
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