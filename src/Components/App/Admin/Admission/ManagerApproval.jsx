import React from 'react'
import ManagerApprovalTable from './ManagerApproval/ManagerApprovalTable';
import { Box } from '@mui/material';


function ManagerApproval() {
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
                <ManagerApprovalTable />
            </div>
        </Box >
    )
}

export default ManagerApproval