import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../asset/images/logo.png'
import IconButton from '@mui/material/IconButton';
import themeContext from '../../../Context/themeContext';
// import './css/NavBar.css'

function NavBar({ routes }) {
    const [value, setValue] = useState(0);
    const [navColor, setNavColor] = useState('')
    const theme = useContext(themeContext)
    useEffect(() => {
        if (theme.mode === 'dark') setNavColor('rgba(0, 0, 0, 0.6)')
        else setNavColor('rgba(255, 255, 255, 0.7)')
    }, [theme])
    return (
        <div>
            <Box
                sx={{ width: "100%", display: { xs: 'none', md: 'flex', position: 'fixed' } }}
                elevation={3}
            >
                <Box
                    sx={{ width: "100%", flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <AppBar position="static">
                        <Container maxWidth="xl">
                            <Toolbar disableGutters style={{ minHeight: '3rem' }}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                >
                                    <img style={{ width: '2rem' }} src={Logo} alt="" />
                                </Typography>

                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                </Box>

                                <BottomNavigation
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    sx={{
                                        background: 'none',
                                        height: '2.6rem'
                                    }}
                                >
                                    {
                                        routes.map((value, index) => {
                                            return (
                                                <BottomNavigationAction
                                                    style={{
                                                        color: navColor
                                                    }}
                                                    key={index} label={value.name} icon={value.component} />
                                            )
                                        })
                                    }
                                </BottomNavigation>
                            </Toolbar>
                        </Container>
                    </AppBar>

                    {/* <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: "block", sm: "block" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                            }

                        }}
                        open
                    >
                        <List sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', height: '100vh' }}>
                            {
                                routes.map((value, index) => {
                                    return (
                                        <ListItem button key={index}>
                                            <ListItemIcon sx={{ width: '100%' }}>
                                                <Box
                                                    sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}
                                                >
                                                    {value.component}
                                                    <Typography variant='caption'>{value.name}</Typography>
                                                </Box>
                                            </ListItemIcon>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Drawer> */}
                </Box>
            </Box>
            <Box
                sx={{ display: { md: 'none' }, position: 'fixed', bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <Box sx={{ width: "100%" }}>
                    <BottomNavigation
                        // showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        {
                            routes.map((value, index) => {
                                return (
                                    <BottomNavigationAction key={index} label={value.name} icon={value.component} />
                                )
                            })
                        }
                    </BottomNavigation>
                </Box>
            </Box>
        </div >
    )
}

export default NavBar