import {fetchApi} from "config/apiConfig";
import Types from "redux/types";

const loading = () =>
{
    return {type: Types.GET_DECK_ID};
};

const getSuccess = (payload) =>
{
    return {type: Types.GET_DECK_ID + '_SUCCESS', payload};
};

const getError = (payload) =>
{
    return {type: Types.GET_DECK_ID + '_FAIL', payload};
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
