import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../app/Routes.js';

hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    , document.getElementById('root'));