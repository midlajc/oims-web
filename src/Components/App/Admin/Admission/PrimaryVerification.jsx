import React from 'react'
import PrimaryVerificationTable from './PrimaryVerification/PrimaryVerificationTable'
import { Box } from '@mui/material';


function PrimaryVerification() {
    return (
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 30
        }}>
            <div
                style={{
                    width: '95%',
                }}>
                <span style={{ float: 'left' }}>
                </span>
                <PrimaryVerificationTable />
            </div>
        </Box >
    )
}

export default PrimaryVerification