import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import MainPage from '~/layouts/MainPage/MainPage.jsx';
import PageNotFound from '~/modules/PageNotFound/PageNotFound.jsx';


export default function Routes() {
    return (
        <div className="main-container">
            <Switch>
                <Redirect exact from="/" to="/home"/>
                <Route exact path="/home"><MainPage/></Route>
                <Route exact path="/home/about_me"><MainPage/></Route>
                <Route exact path="/home/contacts"><MainPage/></Route>
                <Route path="/*"><PageNotFound/></Route>
            </Switch>
        </div>
    );
}