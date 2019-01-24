import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import api from "../api/api";
import userLoggedIn from '../actions/users';

export function* loginSaga(action) {
    console.log('UserSaga');

    const user = yield call(api.user.login, action.user);
    // localStorage.bookwormJWT = user.token;
    yield put(userLoggedIn(user));

    // yield put(push('/dashboard'));
    // console.log('After user logged in');
}

