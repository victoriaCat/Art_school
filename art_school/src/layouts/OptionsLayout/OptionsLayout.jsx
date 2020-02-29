import React from 'react';
import {renderRoutes} from "react-router-config";

const OptionsLayout = ({route}) => {
    return (
        <>
            {renderRoutes(route.routes)}
        </>
    );
};

OptionsLayout.defaultProps ={
    route: null
};

export default {component: OptionsLayout};
