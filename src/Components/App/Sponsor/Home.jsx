import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import PaymentCard from '../../Widget/PaymentCard'



function Home() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '1rem',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%',
            md: '25rem'
          },
          margin: '1rem',
        }}
      >
        <PaymentCard />
      </Box>
    </Box>
  )
}

export default Home