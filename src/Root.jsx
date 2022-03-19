import React, { useState } from 'react'
import Login from './Components/Login'
import authService from './service/authService';
import App from './Components/App'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import themeContext from './Context/themeContext';
import storageService from './service/storageService';


function Root() {

  const user = authService.getCurrentUser();
  const [mode, setMode] = useState(storageService.getTheme() || 'light');
  const theme = createTheme({
    palette: {
      mode,
    },
  })

  const changeTheme = () => {
    setMode(prevVal => {
      let mode = prevVal === 'light' ? 'dark' : 'light'
      storageService.setTheme(mode)
      return mode
    })
  }


  return (
    <div>
      <themeContext.Provider value={{ mode: mode, setMode: changeTheme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {
            (user) ?
              <div>
                <App />
              </div>
              :
              <div>
                <Login />
              </div>
          }
        </ThemeProvider>
      </themeContext.Provider>
    </div >
  )
}

export default Root;
