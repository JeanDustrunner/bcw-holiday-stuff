import React from 'react';
import { WIP, Countries, Shell } from "../pages";

export const ROUTES = {
    MAIN_ROUTES: [
        {
            path: '/app/countries',
            label: 'COUNTRIES',
            component: Countries,
        }, 
        {
            path: '/app/holidays',
            label: 'HOLIDAYS',
            component: WIP

        }
    ],
    APP: {
        path: '/app',
        component: Shell
    },

}

export default ROUTES;