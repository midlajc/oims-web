import React from 'react'
import NavBar from './Sponsor/NavBar'
import { Box } from '@mui/system'

import routes from './Sponsor/routes'
import Routes from './Sponsor/Routes'

function Sponsor() {
  return (
    <>
      <NavBar routes={routes} />
      <Box>
        <Routes />
      </Box>
    </>
  )
}

export default Sponsor