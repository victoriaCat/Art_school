import './Workshop.scss';
import React from 'react';
import {renderRoutes} from "react-router-config";

const Workshop = ({route}) => {
    return (
        <>
            {renderRoutes(route.routes)}
        </>
    );
};

Workshop.defaultProps = {
    route: null
};

export default {component: Workshop};
