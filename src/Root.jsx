import React, { useState } from 'react'
import authService from './service/authService';
import App from './Components/App'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import themeContext from './Context/themeContext';
import storageService from './service/storageService';
import './Root.css'
import Public from './Components/App/Public'



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

  // const changeLoading = () => {

  // }


  return (
    <div>
      <themeContext.Provider value={{ mode: mode, setMode: changeTheme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {
            (user) ?
              <div className=''>
                <App />
              </div>
              :
              <div>
                <Public />
              </div>
          }
        </ThemeProvider>
      </themeContext.Provider>
    </div >
  )
}

export default Root;
