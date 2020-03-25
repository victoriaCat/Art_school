import './MainPage.scss';
import Header from '~/modules/Header/containers/Header.jsx';
import Footer from '~/modules/Footer/Footer.jsx';
import React from 'react';
import { renderRoutes } from "react-router-config";

const MainPage = ({route}) => {
    return (
        <div className="main-page-layout">
            <Header/>
            <div className="main-page-middle-block">
                {renderRoutes(route.routes)}
            </div>
            <Footer/>
        </div>
    );
};

MainPage.defaultProps ={
    route: null
};

export default {component: MainPage};