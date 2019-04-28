import { all, fork } from 'redux-saga/effects';

import { authSagas } from './auth/';

export default function* rootSaga() {
    yield all([
        fork(authSagas)
    ]);
}
