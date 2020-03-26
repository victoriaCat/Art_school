import './Workshop.scss';
import React from 'react';
import {renderRoutes} from "react-router-config";
import Header from "~/modules/Header/containers/Header.jsx";

const Workshop = ({route}) => {
    return (
        <>
            <Header/>
            {renderRoutes(route.routes)}
        </>
    );
};

Workshop.defaultProps = {
    route: null
};

export default {component: Workshop};
