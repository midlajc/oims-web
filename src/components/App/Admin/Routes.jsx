import React from 'react'
import { useRoutes} from "react-router-dom";

import Home from './Home';
import Admission from './Admission';
import Settings from './Settings';

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
    ]);

    return element;
}

export default Routing