import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, Tooltip, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Desktoplogo  from '../assets/logos/logo3.png'
import Mobilelogo from '../assets/logos/logo.png'
import Mobilelogo2 from '../assets/logos/logo2.png'
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import LogOut from "./Buttons/LogOut";



const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);


    // ? Retrieving user info from the store
    const user = useSelector(state => state.user.token);
    const role = useSelector(state => state.user.user.role)


    // ? Depending of the user role, we are redirecting to the adequate panel page [admin / manage / customer]
    const panel = role === 'admin' ? 'admin' : role === 'manager' ? 'manager' : role === 'customer' ? 'moncompte' : null;
    let account;
    user ? account = { title: 'Mon compte', link: panel } : account = { title: 'Se connecter', link: 'signin' }
    const pages = [{ title: 'Nos établissements', link: 'hotels' }, { title: 'Contact', link: 'contact' }, account]
    
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
                <NavLink className='link' to="/">
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex', height: '80px' } }}
                    >
                     <img src={Desktoplogo}></img>
                    </Typography>
                </NavLink>
                <NavLink className='link' to="/">
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'flex', md: 'none', height: '40px' } }}
                    >
                     <img src={Mobilelogo}></img> <img src={Mobilelogo2}></img>
                    </Typography>
                    </NavLink>  
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
                                <NavLink className='link' to={page.link}>
                                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.title}</Typography>
                                    </MenuItem>
                                    </NavLink>
                            ))}
                             <Box sx={{display:'flex', justifyContent: 'center'}}>
                                {user ? <LogOut /> : null}
                                </Box>
                            
                            </Menu>
                    </Box>
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end' }}>
                        {pages.map((page) => (
                            <NavLink className='link'   to={page.link}> 
                        <Button
                            className='nav' 
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color:'black', display: 'block' }}
                        >
                                         {page.title}
                                </Button>
                            </NavLink>
                            
                        )) }
                        {
                                user ? <LogOut /> : null
                        }
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar