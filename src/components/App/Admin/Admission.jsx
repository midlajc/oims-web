import React from 'react'
import Box from '@mui/material/Box';
import { Routes, Route, Link } from "react-router-dom";
import Widget from '../../Common/Widget';
import ApplicantList from './Admission/ApplicantList';

function Admission({ routes }) {
    // console.log(routes);
    return (
        <>
            <Routes>
                <Route path='/admission/applicant-list' element={<ApplicantList />} />

                {/* {routes.map((route, i) => {
                    return (
                        <Route
                            key={i}
                            path={route.path}
                            element={<route.component routes={route.routes} />}
                        />
                    )
                })} */}
            </Routes>
            <div>
                <Box style={{
                    display: 'flex', width: '100%', padding: 25,
                    justifyContent: 'flex-start', alignItems: 'flex-start', flexWrap: 'wrap'
                }}>
                    {
                        routes.map((route, i) => {
                            return (
                                <Box key={i} sx={{ width: { xs: '98%', md: 'auto' } }}>
                                    <Link style={{ textDecoration: 'none', width: '100%' }} to={`${route.path}`}>
                                        <Widget icon={route.icon} name={route.name} />
                                    </Link>
                                </Box>
                            )
                        })
                    }
                </Box>
            </div>
        </>
    )
}

export default Admission