import React from 'react';
import {renderRoutes} from "react-router-config";
import Copyright from "~/libs/Copyright/Copyright.jsx";

const OptionsLayout = ({route}) => {
    return (
        <>
            {renderRoutes(route.routes)}
            <Copyright/>
        </>
    );
};

OptionsLayout.defaultProps ={
    route: null
};

export default {component: OptionsLayout};
