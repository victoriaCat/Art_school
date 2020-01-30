import {FETCH_MAIN_SLIDER_IMAGES} from "../actionTypes";

const initialState = {
    isLoading: true,
};

/*
* @TODO:
* Вожможно нужно добавить еще состояние hasError или что-то типа того, что бы понимать когда не смогли загрузить данные.
* Сейчас будет висеть в isLoading = true, если не смогли загрузить.
* */
export default (state = initialState, {type, isLoading, payload}) => {
    switch (type) {
        case FETCH_MAIN_SLIDER_IMAGES:
            return {
                isLoading,
                payload,
            };

        default:
            return state;
    }
};
