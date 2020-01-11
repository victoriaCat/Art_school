import './MainPage.scss';

import React from 'react';

import Header from '~/modules/Header/containers/Header.jsx';
import MainBlockMainPage from '~/modules/MainBlockMainPage/MainBlockMainPage.jsx';
import Footer from '~/modules/Footer/Footer.jsx';

export default function MainPage() {
    return (
        <>
            <Header/>
            <MainBlockMainPage/>
            <Footer/>
        </>
    );
};