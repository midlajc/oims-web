import React, { useState } from 'react'
import { Box } from '@mui/material';

import ApplicantTable from './ApplicantList/ApplicantTable';

function ApplicantList() {

  return (
    <Box style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: 30
    }}>
      <ApplicantTable />
    </Box >
  )
}

export default ApplicantList 