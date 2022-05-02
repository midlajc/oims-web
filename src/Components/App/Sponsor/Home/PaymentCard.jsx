import React, { useEffect, useState } from 'react'
import { Card, CardContent, Grid, Typography } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Button } from '@mui/material';
import sponsorService from '../../../../service/sponsorService';

function PaymentCard(props) {
    const [dues, setDues] = useState({})

    useEffect(() => {
        sponsorService.getDues().then((dues) => {
            setDues(dues.data[0])
        })
    }, [])

    return (
        <Card
            sx={{
                height: '100%', width: {
                    xs: '100rem',
                    md: '22rem'
                },
            }}
            {...props}
        >
            <CardContent>
                <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="overline"
                        >
                            Outstanding
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h4"
                        >
                            <CurrencyRupeeIcon />{dues.total_to_pay}
                        </Typography>
                    </Grid>
                    <Grid
                        sx={{
                            // pt: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between',
                            gap: '.5rem'
                        }}
                        item>
                        <Button
                            variant="outlined"
                            color='success'
                        >
                            Pay
                        </Button>
                        <Typography
                            color="textSecondary"
                            variant="caption"
                        >
                            Current Due: {dues.current_to_pay}₹
                        </Typography>
                        <Typography
                            color="textSecondary"
                            variant="caption"
                        >
                            Previous Due: {dues.previous_to_pay}₹
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default PaymentCard
