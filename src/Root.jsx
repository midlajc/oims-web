import React from 'react'
import Login from './components/Login'
import authService from './service/authService';
import App from './components/App'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function Root() {
  const user = authService.getCurrentUser();
  const mode = 'dark'
  const theme = createTheme({
    palette: {
      mode,
    },
  })
  // });


  return (
    <div>
      {
        (user) ?
          <div>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <App />
            </ThemeProvider>
          </div>
          :
          <div>
            <Login />
          </div>
      }
    </div>
  )
}

export default Root;
