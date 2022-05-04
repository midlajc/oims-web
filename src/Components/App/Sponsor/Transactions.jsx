import React from 'react'
import TransactionCard from './Transactions/TransactionCard'

function Transactions() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        padding:'1.4rem'
      }}
    >
      <TransactionCard />
    </div>
  )
}

export default Transactions