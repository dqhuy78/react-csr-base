import { fromJS } from 'immutable';
import types from './types';
import { consts } from 'Configs/'

const initState = fromJS({
    fetchStatus: null,
    user: {
        id: null,
    }
});

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.FETCHING_AUTH_USER:
            return state.set('fetchStatus', fromJS(consts.STATUS.FETCHING));
        case types.FETCH_AUTH_USER_SUCCESS:
            return state.set('fetchStatus', fromJS(consts.STATUS.SUCCESS));
        case types.FETCH_AUTH_USER_FAIL:
            return state.set('fetchStatus', fromJS(consts.STATUS.FAIL));
        case types.STORE_AUTH_USER_DATA:
            return state.set('user', fromJS(action.payload.data));
        default:
            return state;
    }
};

export default reducer;
