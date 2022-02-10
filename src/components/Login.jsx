import './Login.css';
import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Login() {
  const paperStyle = { padding: 20, height: 'auto', width: 280, margin: "0px 0", paddingBottom: '2rem' }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnStyle = { margin: '8px 0' }
  return (
    <div className='loginGrid'>
      <Grid className=''>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField label='Username' style={{ marginBottom: '1rem' }} placeholder='Enter username' fullWidth required />
          <TextField label='Password' style={{ marginBottom: '1rem' }} placeholder='Enter password' type='password' fullWidth required />
          {/* <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
              />
            }
            label="Remember me"
          /> */}
          <Button type='submit' color='primary' variant="contained" style={btnStyle} fullWidth>Sign in</Button>
          <Typography >
            <Link href="#" >
              Forgot password ?
            </Link>
          </Typography>
          <Typography > Do you have an account ?
            <Link href="#" >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  )
}

export default Login;
