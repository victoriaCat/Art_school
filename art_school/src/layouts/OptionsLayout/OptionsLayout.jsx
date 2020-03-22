import './OptionsLayout.scss';
import React from 'react';
import {renderRoutes} from "react-router-config";
import Copyright from "~/libs/Copyright/Copyright.jsx";

const OptionsLayout = ({route}) => {
    return (
        <div className="options-layout">
            {renderRoutes(route.routes)}
            <Copyright/>
        </div>
    );
};

OptionsLayout.defaultProps ={
    route: null
};

export default {component: OptionsLayout};
