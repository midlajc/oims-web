import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '../../../asset/images/logo.png'
import themeContext from '../../../Context/themeContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';

function NavBar({ routes }) {

    const location = useLocation()
    const [nav, setNavigator] = useState(location.pathname);
    const [navColor, setNavColor] = useState('rgba(255, 255, 255, 0.7)')
    const theme = useContext(themeContext)

    const navigate = useNavigate()

    const handleNavigation = (e, newValue) => {
        setNavigator(newValue)
        navigate(newValue)
    }

    useEffect(() => {
        if (theme.mode === 'dark') setNavColor('rgba(255, 255, 255, 0.7)')
        else setNavColor('rgba(0, 0, 0, 0.6)')
    }, [theme])
    return (
        <div>
            <Box
                sx={{ width: "100%", display: { xs: 'none', md: 'flex', position: 'static' } }}
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
                                    value={nav}
                                    onChange={handleNavigation}
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
                                                    key={value.path} value={value.path} label={value.name} icon={value.component} />
                                            )
                                        })
                                    }
                                </BottomNavigation>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </Box>
            </Box>
            <AppBar
             sx={{
                 borderRadius:'0 0 .3rem .3rem'
             }}
             position="static"
             >
                <Container maxWidth="xl">
                    <Toolbar disableGutters style={{ minHeight: '2rem' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: 'flex' }}
                        >
                            <img style={{ width: '1.9rem' }} src={Logo} alt="" />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    // onClick={handleOpenUserMenu}
                                    sx={{ p: 0, my: 1 }}
                                >
                                    <Avatar sx={{ height: '1.9rem', width: '1.9rem' }}
                                        alt={"U"} src="/static/images/avatar/1.jpg" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box
                sx={{ display: { md: 'none' }, position: 'fixed', bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <Box sx={{ width: "100%" }}>
                    <BottomNavigation
                        value={nav}
                        onChange={handleNavigation}
                    >
                        {
                            routes.map((value, index) => {
                                return (
                                    <BottomNavigationAction key={value.path} value={value.path} label={value.name} icon={value.component} />
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