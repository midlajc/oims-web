import React, { useState } from 'react'
import { Box } from '@mui/material';

import ApplicationTable from './SponsorRegistration/ApplicationTable';

function SponsorRegistration() {

  return (
    <Box style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: 30
    }}>
      <ApplicationTable />
    </Box >
  )
}

export default SponsorRegistration 