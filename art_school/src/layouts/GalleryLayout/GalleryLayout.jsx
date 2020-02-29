import React from 'react';
import {renderRoutes} from "react-router-config";

const GalleryLayout = ({route}) => {
    return (
        <>
            {renderRoutes(route.routes)}
        </>
    );
};

GalleryLayout.defaultProps ={
    route: null
};

export default {component: GalleryLayout};