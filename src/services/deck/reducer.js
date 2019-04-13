import Types from 'redux/types';

const createReducer = (initialState, reducerMap) => (state = initialState, action) =>
{
    const reducer = reducerMap[action.type];
    return reducer ? reducer(state, action) : state;
};

const INIT_STATE = {
    deck_id: null,
    error: null,
    loading: false,
    success: null,
};

export default createReducer(INIT_STATE, {
    [Types.GET_DECK_ID]: (state, action) =>
    {
        return {
            ...state,
            loading: true,
        };
    },
    [Types.GET_DECK_ID + '_SUCCESS']: (state, action) =>
    {
        return {
            ...state,
            ...action.payload,
            loading: false,
        };
    },
    [Types.GET_DECK_ID + '_FAIL']: (state, action) =>
    {
        return {
            ...state,
            ...action.payload,
            loading: false,
        };
    },
})
;
