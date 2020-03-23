import './WorkshopsCatalog.scss';
import React from 'react';
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