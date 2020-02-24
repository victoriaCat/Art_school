import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@babel/polyfill';
import { store } from "./store";
import { renderRoutes } from "react-router-config";
import Routes from './Routes';


ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <>{renderRoutes(Routes)}</>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));