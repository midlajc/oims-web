import React, { useContext } from 'react'
import themeContext from '../../../Context/themeContext'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import IconButton from '@mui/material/IconButton';

function Settings() {
  const theme = useContext(themeContext)
  return (
    <div>
      <IconButton sx={{ mr: 1 }} onClick={theme.setMode} color="inherit">
        {theme.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>
    </div>
  )
}

export default Settings