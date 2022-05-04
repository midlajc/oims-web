import { Typography } from '@mui/material'
import React from 'react'
import TransactionCard from './Transactions/TransactionCard'

function Transactions() {
  return (
    <>
      <Typography
        sx={{
          paddingTop: 1,
          textAlign: 'center'
        }} variant='h6'>TRANSACTIONS</Typography>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          padding: '1.4rem',
          paddingTop: 10
        }}
      >
        
        <TransactionCard />
      </div>
    </>
  )
}

export default Transactions