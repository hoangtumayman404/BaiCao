import {fetchApi} from "config/apiConfig";
import Types from "redux/types";

const loading = (index) =>
{
    return {type: Types.GET_CARD + index};
};

const getSuccess = (payload, index) =>
{
    return {type: Types.GET_CARD + index + '_SUCCESS', payload};
};

const getError = (payload, index) =>
{
    return {type: Types.GET_CARD + index + '_FAIL', payload};
};

export const getCard = (index) =>
{
    return (dispatch, getStore) =>
    {
        dispatch(loading(index));
        return fetchApi(`/${getStore().deck.deck_id}/draw/?count=3`)
        .then(data => dispatch(getSuccess(data, index)))
        .catch(errorMsg => dispatch(getError(errorMsg, index)));
    };
};

export const updateScore = (payload, index) =>
{
    return {type: Types.UPDATE_SCORE + index, payload};
};

export const updateName = (payload, index) =>
{
    return {type: Types.UPDATE_NAME + index, payload};
};

