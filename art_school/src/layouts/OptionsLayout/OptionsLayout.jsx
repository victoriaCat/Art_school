import './OptionsLayout.scss';
import React from 'react';
import {renderRoutes} from "react-router-config";

const OptionsLayout = ({route}) => {
    return (
        <div className="options-layout">
            {renderRoutes(route.routes)}
        </div>
    );
};

OptionsLayout.defaultProps ={
    route: null
};

export default {component: OptionsLayout};
