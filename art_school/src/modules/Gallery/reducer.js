const initialState = {
    carouselStudentsImages: {
        isLoading: true,
        payload: []
    },
    adultsDrawImages: {
        isLoading: true,
        payload: []
    },
    galleryAdultsStudents: {
        isLoading: true,
        payload: []
    },
    galleryAdultsWorks: {
        isLoading: true,
        payload: []
    },
    galleryKidsStudents: {
        isLoading: true,
        payload: []
    },
    kidsDrawImages: {
        isLoading: true,
        payload: []
    },
    galleryKidsWorks: {
        isLoading: true,
        payload: []
    }
};

export default (state = initialState, {type, isLoading, payload}) => {
    const stateKey = ({
        FETCH_MAIN_CAROUSEL_IMAGES_STUDENTS: 'carouselStudentsImages',
        FETCH_CAROUSEL_ADULTS_DRAW_IMAGES: 'adultsDrawImages',
        FETCH_GALLERY_IMAGES_ADULTS_STUDENTS: 'galleryAdultsStudents',
        FETCH_GALLERY_IMAGES_ADULTS_WORKS: 'galleryAdultsWorks',
        FETCH_GALLERY_IMAGES_KIDS_STUDENTS: 'galleryKidsStudents',
        FETCH_CAROUSEL_KIDS_DRAW_IMAGES: 'kidsDrawImages',
        FETCH_GALLERY_IMAGES_KIDS_WORKS: 'galleryKidsWorks'
    })[type];

    const newState = {
        [stateKey]: {
            isLoading,
            payload
        }
    };

    if (stateKey) {
        return {
            ...state,
            ...newState
        };

    } else {
        return state;
    }
};