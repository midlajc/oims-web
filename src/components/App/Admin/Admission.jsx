import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const routes = [
    {
        name: 'Applicant List',
        route: '/'
    }, {
        name: 'Primary Verification',
        route: '/students'
    }, {
        name: 'Secondary Verification',
        route: '/sponsors'
    }, {
        name: 'Campus Manager Approval',
        route: '/sponsorship'
    },
    // {
    //     name: 'Admission',
    //     route: '/admission'
    // }, {
    //     name: 'Accounts',
    //     route: '/accounts'
    // }, {
    //     name: 'Settings',
    //     route: '/settings'
    // },
];

function Admission() {

    return (
        <div>
            <Box style={{
                display: 'flex', width: '100%', padding: 25,
                justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap'
            }}>
                {
                    routes.map((route) => {
                        return (
                            <Card sx={{
                                display: 'flex', boxShadow: 1, margin: { xs: '2%', md: 2 },
                                height: 80, width: { xs: '100%', md: 280 },
                                justifyContent: 'space-between', alignItems: 'center'
                            }}>
                                <div style={{
                                    backgroundColor: '#3298c0', height: 80, width: 90,
                                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 55, height: 55, }}
                                        image="https://img.icons8.com/ios-glyphs/344/list--v1.png"
                                        alt="Live from space album cover"
                                    />
                                </div>
                                <div style={{
                                    display: 'flex', width: '100%',
                                    height: '100%', alignItems: 'center',
                                }}>
                                    <CardContent >
                                        <div style={{ width: 200, whiteSpace: 'nowrap' }}>
                                            <Typography component="div"
                                                noWrap
                                                sx={{
                                                    paddingLeft: 1,
                                                    // padd: 2,
                                                    // borderRadius: 2,
                                                    fontSize: '0.975rem',
                                                    fontWeight: '700',
                                                }} variant="h5">
                                                {route.name}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                            // </div>
                        )
                    })
                }
            </Box>
        </div>
    )
}

export default Admission