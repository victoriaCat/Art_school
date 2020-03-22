import React from 'react';
import './WorkshopsCatalog.scss';
import {renderRoutes} from "react-router-config";

const WorkshopsCatalog = ({route}) => {
    return (
        <>
            {renderRoutes(route.routes)}
        </>
    );
};

WorkshopsCatalog.defaultProps = {
    route: null
};

export default {component: WorkshopsCatalog};