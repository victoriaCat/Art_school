const initialState = {
    workshopsAllData: {
        isLoading: true,
        payload: []
    },
    workshopsAdultsData: {
        isLoading: true,
        payload: []
    },
    workshopsKidsData: {
        isLoading: true,
        payload: []
    }
};

export default (state = initialState, {type, isLoading, payload}) => {
    const stateKey = ({
        FETCH_WORKSHOPS_ALL_DATA: 'workshopsAllData',
        FETCH_WORKSHOPS_ADULTS_DATA: 'workshopsAdultsData',
        FETCH_WORKSHOPS_KIDS_DATA: 'workshopsKidsData'
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