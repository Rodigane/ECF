import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, Tooltip, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Desktoplogo  from '../assets/logos/logo3.png'
import Mobilelogo from '../assets/logos/logo.png'
import Mobilelogo2 from '../assets/logos/logo2.png'
import { Link } from 'react-router-dom';


const pages = ['Nos établissements', 'Contact', 'Mon compte']
//const pages = [{ title: 'Nos établissements', link: 'etablissements'},{title:'Contact', link : 'contact'},{title: 'Connexion', link : 'customer'}]

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
   
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
  
    return (
        <AppBar position="static" sx={{backgroundColor:'#92AAC7'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Link to="/">
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex', height: '80px' } }}
                    >
                     <img src={Desktoplogo}></img>
                    </Typography>
                </Link>
                <Link to="/">
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'flex', md: 'none', height: '40px' } }}
                    >
                     <img src={Mobilelogo}></img> <img src={Mobilelogo2}></img>
                    </Typography>
                    </Link>  
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                              display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                    </Box>
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end' }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color:'black', display: 'block' }}
                        >
                                { //     <Link to={page.link}>    {page.title}</Link>
                                }
                                {page}
                        </Button>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar