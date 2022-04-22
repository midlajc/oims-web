import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Widget(props) {
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
                {props.component}
            </div>
            <div style={{
                display: 'flex', width: '100%', justifyContent: 'center',
                height: '100%', alignItems: 'center',
            }}>
                <CardContent >
                    <div style={{ width: 'auto' }}>
                        <Typography component="div"

                            sx={{
                                paddingLeft: 0,
                                fontSize: '0.975rem',
                                fontWeight: '700',
                            }} variant="h5">
                            {props.name}
                        </Typography>
                    </div>
                </CardContent>
            </div>
        </Card>
    )
}

export default Widget