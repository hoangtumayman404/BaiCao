import {fetchApi} from "config/apiConfig";
import Types from "redux/types";

export const loading = () =>
{
    return {type: Types.GET_DECK_ID};
};

export const getSuccess = (payload) =>
{
    return {type: Types.GET_DECK_ID + '_SUCCESS', payload};
};

export const getError = (payload) =>
{
    return {type: Types.GET_DECK_ID + '_SUCCESS', payload};
};

export const getDeckId = () =>
{
    return (dispatch) =>
    {
        dispatch(loading());
        return fetchApi('/new/shuffle/?deck_count=1')
        .then(data => dispatch(getSuccess(data)))
        .catch(errorMsg => dispatch(getError(errorMsg)));
    };
};
