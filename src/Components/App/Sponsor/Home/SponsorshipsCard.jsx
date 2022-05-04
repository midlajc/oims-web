import { Box, Card, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar'
import sponsorService from '../../../../service/sponsorService'

let StudentCard = ({ student }) => {
    return (
        <Card
            variant='outlined'
            sx={{
                display: 'flex',
                boxShadow: 1,
                height: 80, width: { xs: '100%', md: 280 },
                borderRadius: '1rem'
            }}>
            <div style={{
                height: 80, width: 110,
                display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>
                <Avatar
                    sx={{ width: '3rem', height: '3rem' }}
                    variant="circular"
                // src={image}
                />
            </div>
            <div style={{
                display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'center',
                height: 90, alignItems: 'flex-start'
            }}>
                <CardContent >
                    <div style={{ width: 'auto' }}>
                        <Typography component="div"
                            sx={{
                                paddingLeft: 0,
                                fontSize: '0.775rem',
                                fontWeight: '700',
                            }} variant="h5">
                            Name: {student.student_name}
                        </Typography>
                        <Typography component="div"
                            sx={{
                                paddingLeft: 0,
                                fontSize: '0.775rem',
                                fontWeight: '700',
                            }} variant="h5">
                            DOB: {student.dob}
                        </Typography>
                        <Typography component="div"
                            sx={{
                                paddingLeft: 0,
                                fontSize: '0.775rem',
                                fontWeight: '700',
                            }} variant="h5">
                            Class: {student.student_standard}
                        </Typography>
                    </div>
                </CardContent>
            </div>
        </Card>
    )
}

function SponsorshipsCard() {


    const [sponsorships, setSponsorships] = useState([])

    useEffect(() => {
        sponsorService.getSponsorshipList().then(response => {
            setSponsorships(response.data)
        })
    }, [])

    return (
        <Card
            sx={{
                height: '100%', width: {
                    xs: '100rem',
                    md: 'auto'
                },
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '.7rem',

            }}
        >
            <Typography
                sx={{
                    textAlign: 'center'
                }}
                variant='button'
            >Sponsorships</Typography>
            {
                sponsorships.map((value, index) => {
                    value.dob = (new Date(value.student_dob).toLocaleDateString('en-GB'));
                    return (
                        <StudentCard key={index} student={value} />
                    )
                })
            }
        </Card>
    )
}

export default SponsorshipsCard