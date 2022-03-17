import React from 'react'
import Header from './Admin/Header';

import { Routes, Route } from "react-router-dom";
import routes from './Admin/Routes'
import ApplicantList from './Admin/Admission/ApplicantList';


function Admin() {
    return (
        <div>
            <Header routes={routes} />
            <Routes>
                {routes.map((route, i) => {
                    // route.routes.map((route, i) => {
                    //     console.log(route);
                    //     // route.routes.map()
                    //     return (
                    //         <Route
                    //             key={i}
                    //             path={route.path}
                    //             element={<route.component routes={route.routes} />}
                    //         />
                    //     )
                    // })
                    return (
                        <Route
                            key={i}
                            path={route.path}
                            element={<route.component routes={route.routes} />}
                        />
                    )
                })}
                {/* <Route path='/admission/applicant-list' element={<ApplicantList />} /> */}
            </Routes>
        </div>
    )
}

export default Admin