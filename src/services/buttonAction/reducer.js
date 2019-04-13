import createReducer from "redux/createReducer";
import Types from 'redux/types';

const INIT_STATE = {
    shuffle: {
        error: null,
        loading: false,
        success: null,
    },
    revealCard: false,
    drawCard: false,
    round: 1,
};

export default createReducer(INIT_STATE, {
    [Types.GET_SHUFFLE_CARD]: (state, action) =>
    {
        return {
            ...state,
            shuffle: {
                loading: true,
            },
        };
    },
    [Types.GET_SHUFFLE_CARD + '_SUCCESS']: (state, action) =>
    {
        return {
            ...state,
            shuffle: {
                ...action.payload,
                loading: false,
            },
        };
    },
    [Types.GET_SHUFFLE_CARD + '_FAIL']: (state, action) =>
    {
        return {
            ...state,
            shuffle: {
                error: action.payload,
                loading: false,
                success: false,
            },
        };
    },
    [Types.REVEAL_CARD]: (state, action) =>
    {
        return {
            ...state,
            revealCard: true,
        };
    },
    [Types.DRAW_CARD]: (state, action) =>
    {
        return {
            ...state,
            drawCard: true,
        };
    },
    [Types.UPDATE_ROUND]: (state, action) =>
    {
        return {
            ...state,
            ...INIT_STATE,
            round: action.payload,
        };
    },
});
