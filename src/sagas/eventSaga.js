import { call, put, takeEvery } from 'redux-saga/effects';
import api from "../api/api";
import * as ActionTypes from '../store/modules/ActionTypes';
import * as eventActions from '../store/modules/events';

export function* watcherGetEvents() {
    yield takeEvery(ActionTypes.REQUEST_EVENTS, workerGetEvents);
}

export function* workerGetEvents(data) {
    const response = yield call(api.user.requestEvents, data.payload);

    yield put(eventActions.loadedEvents(response));
}

