import React, { useState } from 'react';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useLoginMutation } from '../api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../reducers/userSlice';
import { Link, Navigate, useLocation } from "react-router-dom";

export default function SignUp() {

  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const [email, setEmail] = useState("");
  const onEmailChange = e => setEmail(e.target.value);
  const [password, setPassword] = useState("")
  const onPasswordChange = e => setPassword(e.target.value);
  const [login, { isSuccess : isSuccess }] = useLoginMutation()
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ body: { email, password } });
  }
 
 


  return (

      <Container component="main" maxWidth="xs">
      {token ?
        //<Navigate to="/moncompte" /> 
        <>
        <Link to="/moncompte"><Button>compte</Button> </Link>
        <Link to="/reservation"><Button>reservation</Button> </Link>
        </>
        : 
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connectez Vous
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
              sx={{ mt: 3, mb: 2 }}
            >
              Se Connecter
          </Button>
          <Link path to="/moncompte">
          <Button
              type="submit"
              fullWidth
              variant="contained"
            sx={{ mt: 3, mb: 2 }}
          
            >
              reservation
            </Button>
            </Link>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link path to="/signup" variant="body2">
                  Pas encore de compte? Créez en un.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        }
    </Container>

  );
}