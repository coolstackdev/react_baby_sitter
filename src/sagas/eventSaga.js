import { call, put, takeEvery } from 'redux-saga/effects';
import api from "../api/api";
import * as ActionTypes from '../store/modules/ActionTypes';

export function* watcherGetEvents() {
    yield takeEvery(ActionTypes.REQUEST_EVENTS, workerGetEvents);
}

export function* workerGetEvents() {
    const uid = '123';
    const events = yield call(api.user.requestEvents, uid);
    yield put({ type: ActionTypes.LOADED_EVENTS });
}

