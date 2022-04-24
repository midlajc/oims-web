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
import PrimaryVerification from './Admission/PrimaryVerification';
import OfficerApproval from './Admission/OfficerApproval';
import ManagerApproval from './Admission/ManagerApproval';
import AdmittedStudents from './Admission/AdmittedStudents';


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
        {
            path: "admission/primary-verification",
            element: < PrimaryVerification />,
        },
        {
            path: "admission/officer-approval",
            element: < OfficerApproval />,
        },
        {
            path: "admission/manager-approval",
            element: < ManagerApproval />,
        },
        {
            path: "admission/admitted-students",
            element: < AdmittedStudents />,
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