import React, { useState, useContext, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import authService from '../../service/authService';
import storageService from '../../service/storageService';
import { Link } from 'react-router-dom';
import './Header.css'
import themeContext from '../../Context/themeContext';
// import { height } from '@mui/system';
// import Switch from '@mui/material/Switch';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


const routes = [
    {
        name: 'Home',
        route: '/'
    },
    {
        name: 'Settings',
        route: '/settings'
    }
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function AdminHeader() {
    const theme = useContext(themeContext)

    useEffect(() => {
        if (theme.mode === 'light') {
            setLinkStyle({
                textDecoration: 'none',
                color: 'black',
            })
        } else {
            setLinkStyle({
                textDecoration: 'none',
                color: 'white',
            })
        }
    }, [theme]);

    const [linkStyle, setLinkStyle] = useState({
        textDecoration: 'none',
        color: 'white',
    });
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const user = storageService.getUser()
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{ minHeight: '3rem' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="small"
                            sx={{ ml: "-.5rem" }}
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                mt: '15px'
                            }}
                        >
                            {routes.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Link to={page.route} style={linkStyle}>
                                        <Typography textAlign="center">
                                            {page.name}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {routes.map((page, index) => (
                            <Link key={index} className='link button' to={page.route}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 0, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton sx={{ mr: 1 }} onClick={theme.setMode} color="inherit">
                            {theme.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                        </IconButton>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu}
                                sx={{ p: 0, my: 1 }}>
                                <Avatar sx={{ height: '2rem', width: '2rem' }}
                                    alt={user.name} src="/static/images/avatar/1.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '40px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" id='name'>{user.name}</Typography>
                            </MenuItem>
                            {/* <MenuItem >
                                <Switch aria-label='' onClick={theme.setMode} size="small" />
                                <IconButton sx={{ ml: 1 }} onClick={theme.setMode} color="inherit">
                                    {theme.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
                                </IconButton>
                            </MenuItem> */}
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" onClick={authService.logout} id='logout'>Log out</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default AdminHeader