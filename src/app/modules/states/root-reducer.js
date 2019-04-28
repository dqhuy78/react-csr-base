import { combineReducers } from 'redux-immutable';

import { default as authReducer } from './auth/';

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;
