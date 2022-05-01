import React from 'react'
import SponsorshipTable from './SponsorshipList/SponsorshipTable'
import { Box } from '@mui/material';

function SponsorshipList() {
    return (
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 30
        }}>
            <SponsorshipTable />
        </Box >
    )
}

export default SponsorshipList