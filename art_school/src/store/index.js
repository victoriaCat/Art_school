import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import combinedReducers from './reducers/combinedReducers';

const logger = createLogger({collapsed: true});
const middleware = [thunk, logger];

const composeEnhancers =
    typeof window !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

let state;
if (typeof window !== 'undefined') {
    state = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
}

const store = createStore(
    combinedReducers,
    state,
    composeEnhancers(applyMiddleware(...middleware))
);

export {store};
