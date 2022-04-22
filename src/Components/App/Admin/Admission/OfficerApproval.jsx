import React from 'react'
import OfficerApprovalTable from './OfficerApproval/OfficerApprovalTable';
import { Box } from '@mui/material';


function OfficerApproval() {
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
                <OfficerApprovalTable />
            </div>
        </Box >
    )
}

export default OfficerApproval