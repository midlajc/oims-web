import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function Admission() {

    return (
        <Box style={{
            height: '50vh', display: 'flex',width:'100%',padding:25,
            justifyContent: 'flex-start', alignItems: 'flex-start',flexWrap:'wrap'
        }}>
            <Card sx={{
                display: 'flex', boxShadow:1,margin:2,
                justifyContent: 'space-between', alignItems: 'center'
            }}>
                <div style={{
                    backgroundColor: '#3298cf', height: 100, width: 125,
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 70, height: 70, }}
                        image="https://img.icons8.com/ios-glyphs/344/list--v1.png"
                        alt="Live from space album cover"
                    />
                </div>
                <div style={{
                    display: 'flex', width: '100%',height:'100%',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <CardContent sx={{}}>
                        <Typography component="" variant="h5">
                            Applicant List
                        </Typography>
                    </CardContent>
                </div>
            </Card>
            {/* <Card sx={{
                display: 'flex', boxShadow:1,margin:2,
                justifyContent: 'space-between', alignItems: 'center'
            }}>
                <div style={{
                    backgroundColor: '#3298cf', height: 100, width: 125,
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 70, height: 70, }}
                        image="https://img.icons8.com/ios-glyphs/344/list--v1.png"
                        alt="Live from space album cover"
                    />
                </div>
                <div style={{
                    display: 'flex', width: '100%',height:'100%',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <CardContent sx={{}}>
                        <Typography component="" variant="h5">
                            Applicant List
                        </Typography>
                    </CardContent>
                </div>
            </Card> */}
        </Box>
    )
}

export default Admission