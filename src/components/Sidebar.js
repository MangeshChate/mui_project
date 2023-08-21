import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import GroupIcon from '@mui/icons-material/Group';
import ModeNightIcon from '@mui/icons-material/ModeNight';



// import InboxIcon from '@mui/icons-material/Inbox';
export default function Sidebar({setMode , modi}) {
    return (
        <Box sx={{  display: { xs: "none", sm: "block",  } }} flex={1} p={2} >
        <Box position="fixed">
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" herf="#home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                            <ListItemText primary="Homepage"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" herf="#home">
                        <ListItemIcon>
                            <ContactPageIcon/>
                        </ListItemIcon>
                            <ListItemText primary="Pages"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" herf="#home">
                        <ListItemIcon>
                            <GroupIcon/>
                        </ListItemIcon>
                            <ListItemText primary="Groups"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" herf="#home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                            <ListItemText primary="Marketplace"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" herf="#home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                            <ListItemText primary="Friends"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" herf="#home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                            <ListItemText primary="Settings"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" herf="#home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                            <ListItemText primary="Profile"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" herf="#home">
                        <ListItemIcon>
                            <ModeNightIcon/>
                        </ListItemIcon>
                       
                        <Switch onChange={e => setMode(modi === "light" ? "dark" : "light")} />



                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
        </Box>
    )
}
