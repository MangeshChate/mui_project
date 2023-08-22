import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
export default function Add() {

    const [open, setOpen] = useState(false)

    const StyledModal = styled(Modal)({
        display: "flex",
        alignItems: "center"
        , justifyContent: "center"
    })

    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: "5px",
        margin: "10px"
    })

    return (

        <>

            <Tooltip onClick={e => setOpen(true)} title="Add" sx={{ position: "fixed", bottom: 20, left: { sm: "calc(50%)", md: 30 } }} >
                <Fab color="primary" aria-label="add" >
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedy="modal-modal-description"
            >
                <Box width={400} height={280} p={3} bgcolor={"background.default"} color="text.primary" borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign={'center'} >
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar src='https://www.comingsoon.net/wp-content/uploads/sites/3/2023/08/one-piece-gear-5.png'
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant="span">Mangesh Chate</Typography>
                    </UserBox>
                    <TextField
                        id="multiline-text-field"
                        label="Multiline"
                        multiline
                        placeholder="What's in your mind ?"
                        rows={3}
                        variant="standard"
                        sx={{ width: "100%" }}
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color="primary" />
                        <ImageIcon color="secondary" />
                        <VideocamIcon color="success" />
                        <PersonAddIcon color="error" />
                    </Stack>
                    <ButtonGroup variant="contained" fullWidth>
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}><DateRangeIcon/></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>

        </>
    )
}
