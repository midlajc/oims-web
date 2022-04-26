import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Typography } from '@mui/material';

function NavBar({ drawerWidth, routes }) {
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <Box
                sx={{ display: { xs: 'none', md: 'flex', position: 'fixed' } }}
                elevation={3}
            >
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
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
                    </Drawer>
                </Box>
            </Box>
            <Box
                sx={{ display: { md: 'none' }, position: 'fixed', bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <Box sx={{ width: "100%" }}>
                    <BottomNavigation
                        showLabels
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