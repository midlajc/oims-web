import React, { useState } from 'react'
import Login from './components/Login'
import authService from './service/authService';
import App from './components/App'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import themeContext from './Context/themeContext';
import tokenService from './service/tokenService';


function Root() {

  const user = authService.getCurrentUser();
  const [mode, setMode] = useState(tokenService.getTheme() || 'light');
  const theme = createTheme({
    palette: {
      mode,
    },
  })

  const changeTheme = () => {
    setMode(prevVal => {
      let mode = prevVal === 'light' ? 'dark' : 'light'
      tokenService.setTheme(mode)
      return mode
    })
  }


  return (
    <div>
      {
        (user) ?
          <div>
            <themeContext.Provider value={{ mode: mode, setMode: changeTheme }}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
              </ThemeProvider>
            </themeContext.Provider>
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
