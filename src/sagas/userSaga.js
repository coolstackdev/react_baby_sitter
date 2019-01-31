import { call, put, takeEvery } from 'redux-saga/effects';
import api from "../api/api";
import * as ActionTypes from '../store/modules/ActionTypes';

export function* watcherRequestLogout() {
    console.log('userSaga watcher');

    yield takeEvery(ActionTypes.REQUEST_LOGOUT, workerRequestLogout);
}

export function* workerRequestLogout() {
    console.log('userSaga worker');

    yield call(api.user.requestLogout);
    yield put({ type: ActionTypes.USER_LOGGED_OUT });
}

