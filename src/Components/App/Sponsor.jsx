import React from 'react'
import NavBar from './Sponsor/NavBar'
import { Box } from '@mui/system'

import routes from './Sponsor/routes'

function Sponsor() {
  let drawerWidth = '6.5rem'
  return (
    <>
      <NavBar drawerWidth={drawerWidth} routes={routes} />
      <Box sx={{ marginLeft: { md: drawerWidth } }}>
        <div>Sponsor</div>
      </Box>
    </>
  )
}

export default Sponsor