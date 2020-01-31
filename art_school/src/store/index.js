import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import combinedReducers from './combinedReducers';

const logger = createLogger({collapsed: true});
const middleware = [thunk, logger];

let state;
if (typeof window !== 'undefined') {
    state = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
}

const store = createStore(
    combinedReducers,
    state,
    applyMiddleware(...middleware)
);

export {store};
