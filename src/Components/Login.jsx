import './Login.css';
import React from 'react'
import { useState} from 'react';
import { Grid, Paper, Avatar, TextField, Button, Alert } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import authService from '../service/authService';
import { useNavigate } from "react-router-dom";
import background from '../asset/images/login_bg.jpg'


function Login() {

  const navigate = useNavigate()

  const [dAlert, setDAlert] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {
    authService.login(username, password).then(res => {
      navigate('/')
      window.location.reload()
    }).catch(err => {
      setDAlert(err.data.message)
    })
  }

  const paperStyle = { padding: 20, height: 'auto', width: 310, margin: "0px 0", paddingBottom: '2rem' }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnStyle = { margin: '8px 0' }
  return (
    <div className='loginGrid' style={{backgroundImage:`url('${background}')`}}>
      <Grid className=''>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2>Log In</h2>
          </Grid>
          <div id='alert'></div>
          {(dAlert != null) ?
            <Alert severity="error" style={{ marginBottom: '1rem' }}>
              {dAlert}
            </Alert>
            : ''
          }
          <TextField label='Username'
            style={{ marginBottom: '1rem' }} placeholder='Enter username'
            onChange={(e) => setUsername(e.target.value)} fullWidth required />
          <TextField label='Password'
            style={{ marginBottom: '1rem' }} placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)} type='password' fullWidth required />
          <Button onClick={doLogin}
            color='primary' variant="contained"
            style={btnStyle} fullWidth>Log in</Button>
        </Paper>
      </Grid>
    </div>
  )
}

export default Login;
