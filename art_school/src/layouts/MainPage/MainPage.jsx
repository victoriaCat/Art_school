import './MainPage.scss';
import Header from '~/modules/Header/containers/Header.jsx';
import Footer from '~/modules/Footer/Footer.jsx';
import React from 'react';
import { renderRoutes } from "react-router-config";
import Copyright from "~/libs/Copyright/Copyright.jsx";

const MainPage = ({route}) => {
    return (
        <>
            <Header/>
            <div className="main-page-middle-block">
                {renderRoutes(route.routes)}
            </div>
            <Footer/>
            <Copyright/>
        </>
    );
};

MainPage.defaultProps ={
    route: null
};

export default {component: MainPage};