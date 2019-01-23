import React, { Component } from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import store from './store/store';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

ReactDOM.render(
    <Provider store={store}>
        <div className="App">
            <PostForm />
            <hr />
            <Posts />
        </div>
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
