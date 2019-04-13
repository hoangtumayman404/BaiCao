import createReducer from "redux/createReducer";
import Types from 'redux/types';

const INIT_STATE = {
    name: 'PLAYER',
    index: 0,
    score: null,
    error: null,
    loading: false,
    cards: [],
    success: null,
};

export default (index) => createReducer(INIT_STATE, {
    [Types.UPDATE_NAME + index]: (state, action) =>
    {
        return {
            ...INIT_STATE,
            name: action.payload,
            index,
        };
    },
    [Types.UPDATE_SCORE + index]: (state, action) =>
    {
        return {
            ...state,
            score: state.score + action.payload,
        };
    },
    [Types.GET_CARD + index]: (state, action) =>
    {
        return {
            ...state,
            loading: true,
        };
    },
    [Types.GET_CARD + index + '_SUCCESS']: (state, action) =>
    {
        return {
            ...state,
            ...action.payload,
            loading: false,
        };
    },
    [Types.GET_CARD + index + '_FAIL']: (state, action) =>
    {
        return {
            ...state,
            ...action.payload,
            loading: false,
        };
    },
});
