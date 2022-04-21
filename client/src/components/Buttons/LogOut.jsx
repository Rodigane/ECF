import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/userSlice';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const LogOut = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogOut = () => {
        dispatch(logout());
        navigate('/');
    }
  return (
    <Button  size='small' sx={{color:'black'}} onClick={handleLogOut}> Se déconnecter </Button>
    
  )
}

export default LogOut