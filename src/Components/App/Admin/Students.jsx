import { Box } from '@mui/system'
import React from 'react'
import StudentTable from './Students/StudentTable'

function Students() {
  return (
    <Box
      sx={{
        display:'flex',
        margin:'2rem'
      }}
    >
      <StudentTable />
    </Box>
  )
}

export default Students