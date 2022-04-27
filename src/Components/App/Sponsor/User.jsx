import { Button } from '@mui/material'
import React from 'react'
import authService from '../../../service/authService'

function User() {
  return (
    <Button
      variant='contained'
      onClick={authService.logout}
    >
      log out
    </Button>
  )
}

export default User