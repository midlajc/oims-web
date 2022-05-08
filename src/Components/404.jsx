import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                height: '80vh',
                alignItems: 'center'
            }}>
            <Typography variant="overline" display="block">
                404 Not Found
            </Typography>
            <Button variant="outlined"
                size='small'
                onClick={() => {
                    navigate('/')
                }}
                display="block">
                Back to Home
            </Button>
        </div>
    )
}

export default NotFound