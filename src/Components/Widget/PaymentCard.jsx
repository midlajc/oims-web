import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Button } from '@mui/material';

function PaymentCard(props) {
    return (
        <Card
            sx={{ height: '100%' }}
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
                            <CurrencyRupeeIcon />3000
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            color='success'
                        >
                            Pay
                        </Button>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        pt: 2,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Typography
                        color="textSecondary"
                        variant="caption"
                    >
                        Since 10/01/2022
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default PaymentCard