import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import MainPage from '~/app/layouts/MainPage/MainPage.jsx';
import PageNotFound from '~/app/modules/PageNotFound/PageNotFound.jsx';


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/"><MainPage/></Route>
            <Route exact path="/about"><MainPage/></Route>
            <Route exact path="/contacts"><MainPage/></Route>
            <Route path="/*"><PageNotFound/></Route>
        </Switch>
    );
}