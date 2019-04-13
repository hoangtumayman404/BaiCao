import {fetchApi} from "config/apiConfig";
import Types from "redux/types";

const loading = () =>
{
    return {type: Types.GET_SHUFFLE_CARD};
};

const getSuccess = (payload) =>
{
    return {type: Types.GET_SHUFFLE_CARD + '_SUCCESS', payload};
};

const getError = (payload) =>
{
    return {type: Types.GET_SHUFFLE_CARD + '_FAIL', payload};
};

export const shuffleCard = () =>
{
    return (dispatch, getStore) =>
    {
        dispatch(loading());
        return fetchApi(`/${getStore().deck.deck_id}/shuffle/`)
        .then(data => dispatch(getSuccess(data)))
        .catch(errorMsg => dispatch(getError(errorMsg)));
    };
};

export const drawCard = () => ({type: Types.DRAW_CARD});
export const revealCard = () => ({type: Types.REVEAL_CARD});
export const updateRound = (payload) => ({type: Types.UPDATE_ROUND, payload});
