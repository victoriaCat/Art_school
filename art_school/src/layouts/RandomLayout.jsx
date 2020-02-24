import React from 'react';
import {renderRoutes} from "react-router-config";

const RandomLayout = ({route}) => {
    return (
        <>
            {renderRoutes(route.routes)}
        </>
    );
};

RandomLayout.defaultProps ={
    route: null
};

export default {component: RandomLayout};
