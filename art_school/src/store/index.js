import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import combinedReducers from './reducers/combinedReducers';

const middleware = [thunk];

const composeEnhancers = () => {
    return typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose ;
};

let state;
if(typeof window !== 'undefined'){
    state = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
}

const store = createStore(
    combinedReducers,
    state,
    composeEnhancers(applyMiddleware(...middleware))
);

export { store };