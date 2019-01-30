import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import api from "../api/api";

export function* loginSaga(action) {

    const user = yield call(api.user.login, action.user);
    // yield put(userLoggedIn(user));

    // yield put(push('/dashboard'));
}

