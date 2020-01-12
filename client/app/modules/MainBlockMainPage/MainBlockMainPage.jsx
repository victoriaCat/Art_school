import React from 'react';
import { Route } from 'react-router-dom';

import WelcomePage from '~/modules/WelcomeBlockMainPage/containers/WelcomeBlockMainPage.jsx';
import AboutMe from '~/modules/AboutMe/containers/AboutMe.jsx';
import Contacts from '~/modules/Contacts/containers/Contacts.jsx';

export default function MainBlockMainPage() {
    return (
        <div className="main-page-middle-block">
            <Route exact path='/home' render={() => (<WelcomePage/>)}/>
            <Route path='/home/about_me' render={() => (<AboutMe/>)}/>
            <Route path='/home/contacts' render={() => (<Contacts/>)}/>
        </div>
    )
};