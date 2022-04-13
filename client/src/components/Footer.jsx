import React from 'react'
import { Typography, Link, Box, Container } from '@mui/material'
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
    <Link color="inherit" href="">
      Hypnos
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  </Box>
  )
}

export default Footer