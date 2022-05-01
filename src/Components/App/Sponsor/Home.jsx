import { Box } from '@mui/system'
import React from 'react'
import PaymentCard from './Home/PaymentCard'
import SponsorshipsCard from './Home/SponsorshipsCard'


function Home() {
  return (
    <Box
      style={{
        display: 'flex',
        width: '100%',
        padding: '1.5rem',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '1rem'
      }}
    >
      <PaymentCard />
      <SponsorshipsCard />
    </Box>
  )
}

export default Home