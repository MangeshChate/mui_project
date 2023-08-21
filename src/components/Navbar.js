
import { AppBar, Toolbar, Typography, styled, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

import React, { useState } from 'react'

export default function Navbar() {

    const [open , setOpen] = useState(false)


    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"

    })

    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        width: "40%"
    }))

    const Icons = styled(Box)(({ theme }) => ({
        display: "none"
        , gap: "20px"
        , alignItems: "center",
        [theme.breakpoints.up("sm")]:{
            display:"flex"
        }
    }))
    const UserBox = styled(Box)(({ theme }) => ({
        display: "none",
        gap: "10px",
        [theme.breakpoints.down("sm")]:{
            display:"flex"
        }

    }))

    return (
        <AppBar position='sticky' >
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" , fontWeight:"bold"} }}>Mangesh</Typography>
                <PetsIcon sx={{ display: { sm: "none", xs: "block" } }} />
                <Search><InputBase placeholder='search...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon sx={{ width: 30, height: 30 }} />
                    </Badge>
                    <Badge badgeContent={4} color="error" >
                        <NotificationsIcon sx={{ width: 30, height: 30 }} />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30, backgroundColor: "cyan" }} src="https://mangeshchate.netlify.app/static/media/my_img.757a064c61c4b77e1cb1.png" 
                        onClick={e=>setOpen(true)}
                    />
                </Icons>
                <UserBox>
                    <Avatar sx={{ width: 30, height: 30, backgroundColor: "cyan" }} src="https://mangeshchate.netlify.app/static/media/my_img.757a064c61c4b77e1cb1.png"
                    
                    onClick={e=>setOpen(true)}

                    />
                <Typography>Mangesh</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                    vertical:"top",
                    horizontal:"right"
                }}

                transformOrigin={{
                    vertical:"top",
                    horizontal:"right"
                }}
            
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My Account</MenuItem>
                <MenuItem>about</MenuItem>

            </Menu>
        </AppBar>
    )
}
