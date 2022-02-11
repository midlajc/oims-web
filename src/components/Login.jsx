import './Login.css';
import React from 'react'
import { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import authService from '../service/authService';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {
    authService.login(username, password).then(res => {
      console.log(res);
    }).catch(err => {
      console.log('err:'+err);
    })
  }

  const paperStyle = { padding: 20, height: 'auto', width: 280, margin: "0px 0", paddingBottom: '2rem' }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnStyle = { margin: '8px 0' }
  return (
    <div className='loginGrid'>
      <Grid className=''>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2>Log In</h2>
          </Grid>
          <TextField label='Username'
            style={{ marginBottom: '1rem' }} placeholder='Enter username'
            onChange={(e) => setUsername(e.target.value)} fullWidth required />
          <TextField label='Password'
            style={{ marginBottom: '1rem' }} placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)} type='password' fullWidth required />
          {/* <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
              />
            }
            label="Remember me"
          /> */}
          <Button onClick={doLogin}
            color='primary' variant="contained"
            style={btnStyle} fullWidth>Log in</Button>
          {/* <Typography >
            <Link href="#" >
              Forgot password ?
            </Link>
          </Typography>
          <Typography > Do you have an account ?
            <Link href="#" >
              Sign Up
            </Link>
          </Typography> */}
        </Paper>
      </Grid>
    </div>
  )
}

export default Login;
