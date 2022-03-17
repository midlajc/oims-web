import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';

const routes = [
    {
        name: 'Applicant List',
        route: '/',
        Icon: 'https://img.icons8.com/ios-glyphs/344/list--v1.png'
    }, {
        name: 'Primary Verification',
        route: '/',
        Icon: 'https://img.icons8.com/ios-glyphs/344/user--v1.png'
    }, {
        name: 'Secondary Verification',
        route: '/',
        Icon: 'https://img.icons8.com/pastel-glyph/344/page-orientation--v2.png'
    }, {
        name: 'Campus Manager Approval',
        route: '/',
        Icon: 'https://img.icons8.com/material/344/checked--v1.png'
    },
    {
        name: 'Campus Manager Approval',
        route: '/',
        Icon: 'https://img.icons8.com/material/344/facebook-like--v1.png'
    },

];

function Admission() {

    return (
        <div>
            <Box style={{
                display: 'flex', width: '100%', padding: 25,
                justifyContent: 'flex-start', alignItems: 'flex-start', flexWrap: 'wrap'
            }}>
                {
                    routes.map((route) => {
                        return (
                            <Card sx={{
                                display: 'flex', boxShadow: 1, margin: { xs: '2%', md: 3 },
                                height: 80, width: { xs: '100%', md: 280 },
                                justifyContent: 'space-between', alignItems: 'center'
                            }}>
                                <div style={{
                                    backgroundColor: '#327ec9', height: 80, width: 110,
                                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 55, height: 55, }}
                                        image={route.Icon}
                                        alt="Live from space album cover"
                                    />
                                </div>
                                <div style={{
                                    display: 'flex', width: '100%',
                                    height: '100%', alignItems: 'center',
                                }}>
                                    <CardContent >
                                        <div style={{ width: { xs: 160, md: 'auto' }, whiteSpace: '' }}>
                                            <Typography component="div"

                                                sx={{
                                                    paddingLeft: 1,
                                                    fontSize: '0.975rem',
                                                    fontWeight: '700',
                                                }} variant="h5">
                                                {route.name}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        )
                    })
                }
            </Box>
        </div>
    )
}

export default Admission