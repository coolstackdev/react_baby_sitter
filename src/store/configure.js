import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configure = () => {
    const store = createStore(modules, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);

    return store;
}

export default configure;
