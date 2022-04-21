import React, { useState } from 'react';
import { Avatar, Button, TextField, Alert, Checkbox, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useLoginMutation } from '../api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import SnackbarAlert from './Buttons/Snackbar';

const SignIn = () => {

  const queryState = useSelector(state => state.query.queryState)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const onEmailChange = e => setEmail(e.target.value);
  const [password, setPassword] = useState("");
  const onPasswordChange = e => setPassword(e.target.value);
  const [login, { isSuccess: isSuccess, error }] = useLoginMutation();
  const userLocation = useSelector(state => state.auth.auth)
  const token = useSelector(state => state.user.token)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ body: { email, password } });
  }

  if (error) {
    
  };
  
  if (token && isSuccess) {
    const origin = userLocation || '/';
    navigate(origin);
  }
 


  return (

      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#E2DFA2' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connectez Vous
          </Typography>
          <Box component="form"   onSubmit={handleSubmit}  noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
              <TextField
                  value={email}
                  onChange={onEmailChange}
                  required
                  fullWidth
                  id="email"
                  label="Adresse email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  value={password}
                  onChange={onPasswordChange}
                  required
                  fullWidth
                  label="Mot de passe"
                  type="password"
                  id="password"
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor:'#92AAC7', color:'black'  }}
          
            >
              Se Connecter
          </Button>
     
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink path to="/signup" variant="body2">
                  Pas encore de compte? Créez en un.
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      {queryState === 400 ? <SnackbarAlert message="une erreur est survenue" severity='error' />  : null}      
    </Container>

  );
}

export default SignIn