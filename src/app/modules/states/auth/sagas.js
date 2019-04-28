import { put, call, takeLatest, delay } from 'redux-saga/effects';

import types from './types';
import api from 'Api/'
import actions from './actions';

export default function* sagas() {
    yield takeLatest(types.FETCHING_AUTH_USER, fetchAuthUser);
}

function* fetchAuthUser() {
    const response = yield call(api.auth.demoFetchAuthUser);
    yield delay(1000);
    if (response.status === 200) {
        delete response.status;
        yield put(actions.storeAuthUserData(response));
        yield put(actions.fetchAuthUserSuccess());
        return;
    }

    // Handle error here
}
