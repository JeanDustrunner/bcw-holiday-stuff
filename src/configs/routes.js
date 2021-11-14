import React from 'react';
import { WIP, Countries, Shell, Calendar } from "../pages";

export const ROUTES = {
    MAIN_ROUTES: [
        {
            path: '/app/countries',
            label: 'COUNTRIES',
            component: Countries,
        }, 
        {
            path: '/app/holidays/:countryName',
            label: 'HOLIDAYS',
            component: Calendar

        }
    ],
    APP: {
        path: '/app',
        component: Shell
    },

}

export default ROUTES;
