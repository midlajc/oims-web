import { Box } from '@mui/system'
import React from 'react'
import PaymentCard from './Home/PaymentCard'



function Home() {

  return (
    <Box
      style={{
        display: 'flex',
        width: '100%',
        padding: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100rem',
            md: '22rem'
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