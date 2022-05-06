import React from 'react'
import { useRoutes } from "react-router-dom";

import SponsorRegistration from './SponsorRegistration';
import NotFound from '../../404';
import Login from '../../Login';

function Routing() {
    let element = useRoutes([
        //Home
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/sponsor-registration",
            element: <SponsorRegistration />,
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]);

    return element;
}

export default Routing