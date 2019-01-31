import { all } from 'redux-saga/effects';

import { watcherGetEvents } from './eventSaga';
import { watcherRequestLogout } from './userSaga';

export default function* rootSaga() {
    yield all([
        watcherGetEvents(),
        watcherRequestLogout(),
    ])
}