import './MainPage.scss';
import React from 'react';
import {Route} from 'react-router-dom';

import WelcomePage from '~/app/modules/WelcomeBlockMainPage/containers/WelcomeBlockMainPage.jsx';
import AboutMe from '~/app/modules/AboutMe/containers/AboutMe.jsx';
import Contacts from '~/app/modules/Contacts/containers/Contacts.jsx';

import Header from '~/app/modules/Header/containers/Header.jsx';
import Footer from '~/app/modules/Footer/Footer.jsx';


export default function MainPage() {
    return (
        <>
            <Header/>
            <div className="main-page-middle-block">
                <Route exact path='/' render={() => (<WelcomePage/>)}/>
                <Route exact path='/about' render={() => (<AboutMe/>)}/>
                <Route exact path='/contacts' render={() => (<Contacts/>)}/>
            </div>
            <Footer/>
        </>
    )
};