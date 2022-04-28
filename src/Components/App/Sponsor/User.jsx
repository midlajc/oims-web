import React, { useState, useEffect } from 'react'
import authService from '../../../service/authService'
import { Card, Box } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider';
import { LoadingButton } from '@mui/lab'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { TableBody } from '@mui/material';
import sponsorService from '../../../service/sponsorService'

function User() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState('')

  useEffect(async () => {
    setUser((await sponsorService.getProfile()).data)
  }, [])

  const logout = () => {
    setLoading(newValue => !newValue)
    authService.logout()
  }

  const tableCell = {
    border: 'none'
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          margin: '1rem',
          width: {
            md: '28rem',
            xs: '100%'
          },
          borderRadius: ".5rem",
        }}
      >
        <Box sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Avatar variant="rounded" src="avatar1.jpg" />
          <Typography fontWeight={700}>{user.name}</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: ".4rem",
          }}
        >
          <TableContainer>
            <Table sx={{ minWidth: 'auto' }} size="small" aria-label="a dense table">
              <TableBody>
                <TableRow>
                  <TableCell sx={tableCell}>DOB</TableCell>
                  <TableCell sx={tableCell}>{new Date(user.dob).toLocaleDateString('en-GB')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={tableCell}>Gender</TableCell>
                  <TableCell sx={tableCell}>{user.gender}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={tableCell}>Username</TableCell>
                  <TableCell sx={tableCell}>{user.username}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={tableCell}>Mobile</TableCell>
                  <TableCell sx={tableCell}>{user.mobile}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={tableCell}>Email</TableCell>
                  <TableCell sx={tableCell}>{user.email}</TableCell>
                </TableRow>
                {/* <TableRow>
                <TableCell sx={tableCell}>Mobile</TableCell>
                <TableCell sx={tableCell}>test</TableCell>
              </TableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
        >
          <LoadingButton
            loading={loading}
            size='small'
            variant='contained'
            onClick={logout}
          >
            log out
          </LoadingButton>
        </Stack>
      </Card>
    </div>
  )
}

export default User