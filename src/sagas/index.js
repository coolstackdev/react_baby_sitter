import { takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST } from "../actions/types";
import { loginSaga } from './userSaga';

export function* rootSaga() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
}