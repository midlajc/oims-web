import React from 'react'
import Box from '@mui/material/Box';
import { Link, Outlet } from "react-router-dom";
import Widget from '../../Common/Widget';
import routes from './Admission/routes'

function Admission() {
    return (
        <>
            <div>
                <Outlet />
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