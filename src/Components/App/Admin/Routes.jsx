import React from 'react'
import { useRoutes } from "react-router-dom";

import Home from './Home';
import Admission from './Admission';
import Settings from './Settings';
import Sponsors from './Sponsors';
import Sponsorship from './Sponsorship';
import Accounts from './Accounts';
import NotFound from '../../404';

//Admission
import ApplicantList from './Admission/ApplicantList';


function Routing() {
    let element = useRoutes([
        //Home
        {
            path: "/",
            element: <Home />,
        },
        //Admission
        {
            path: "admission",
            element: <Admission />,
            children: [
            ],
        },
        {
            path: "admission/applicant-list",
            element: < ApplicantList />,
        },
        //Settings
        {
            path: "settings",
            element: <Settings />
        },
        {
            path: "sponsors",
            element: <Sponsors />
        },
        {
            path: "sponsorship",
            element: <Sponsorship />
        },
        {
            path: "accounts",
            element: <Accounts />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]);

    return element;
}

export default Routing