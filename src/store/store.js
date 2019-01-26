import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { sessionService } from 'redux-react-session';

import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sessionService.initSessionService(store);

sagaMiddleware.run(rootSaga);

export default store;