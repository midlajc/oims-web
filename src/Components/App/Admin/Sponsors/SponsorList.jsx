import React from 'react'
import SponsorTable from './SponsorList/SponsorTable'
import { Box } from '@mui/material';

function SponsorList() {
    return (
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 30
        }}>
            <SponsorTable />
        </Box >
    )
}

export default SponsorList