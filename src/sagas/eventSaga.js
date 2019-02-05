import { call, put, takeEvery } from 'redux-saga/effects';
import api from "../api/api";
import * as ActionTypes from '../store/modules/ActionTypes';
import * as eventActions from '../store/modules/events';
import { create } from 'domain';

export function* watcherGetEvents() {
    yield takeEvery(ActionTypes.REQUEST_EVENTS, workerGetEvents);
}

export function* workerGetEvents(action) {
    try {
        let { data } = yield call(api.user.requestEvents, action.payload);

        var retData = {
            'userData': data.userData,
            'events': data.events
        }

        console.log(retData);

        yield put(eventActions.loadedEvents(retData));
    } catch (e) {
        console.log(e);
    }
}

