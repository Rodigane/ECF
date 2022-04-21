import React from 'react'
import { Typography, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: 'auto',
      backgroundColor: '#92AAC7',
      height: '80px'
    }}
  >
 
    <Typography variant="body2" color="text.secondary" align="center">
    {'Copyright © '}
    <NavLink className='link' color="inherit" to="/">
      Hypnos
    </NavLink>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  </Box>
  )
}

export default Footer