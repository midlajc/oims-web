import React from 'react'
import { useRoutes } from "react-router-dom";

import Home from './Home';
import Transactions from './Transactions';
import User from './User';
import Settings from './Settings';
import NotFound from '../../404';


function Routing() {
    let element = useRoutes([
        //Home
        {
            path: "/",
            element: <Home />,
        },
        //Transaction
        {
            path: "transactions",
            element: <Transactions />,
            children: [
            ],
        },
        //User
        {
            path: "user",
            element: <User />
        },
        //Settings
        {
            path: "settings",
            element: <Settings />
        },
        //404 Not Found
        {
            path: "*",
            element: <NotFound />
        }
    ]);

    return element;
}

export default Routing