import { createAction } from 'Utils/redux-helper';
import types from './types';

const fetchingAuthUser = () => createAction(
    types.FETCHING_AUTH_USER
);

const fetchAuthUserSuccess = () => createAction(
    types.FETCH_AUTH_USER_SUCCESS
);

const fetchAuthUserFail = () => createAction(
    types.FETCH_AUTH_USER_FAIL
);

const storeAuthUserData = data => createAction(
    types.STORE_AUTH_USER_DATA,
    { data }
);

export default {
    fetchingAuthUser,
    fetchAuthUserSuccess,
    fetchAuthUserFail,
    storeAuthUserData
}
