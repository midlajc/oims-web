import React from 'react'
import TransactionTable from './Transactions/TransactionTable'
import { Box } from '@mui/material';


function Transactions() {
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
                <TransactionTable />
            </div>
        </Box >
    )
}

export default Transactions