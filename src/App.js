import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import { Box, Container, Stack, ThemeProvider, createTheme } from '@mui/material'
import Navbar from './components/Navbar'
import Add from './components/Add'
export default function App() {

  const [mode , setMode] = useState("light")
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color="text.primary">
      <Navbar />
      <Add setMode={setMode} modi={mode}/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />

      </Stack>
    </Box>

    </ThemeProvider>
  )
}
