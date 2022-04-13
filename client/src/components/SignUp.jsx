import React, { useState } from 'react';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container } from '@mui/material';
import { NavLink, useNavigate } from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useCreateCustomerMutation } from '../api/apiSlice';
import { useSelector } from 'react-redux';

const SignUp = () => {

  const navigate = useNavigate();
  const userLocation = useSelector(state => state.auth.auth);
  const [createCustomer, { isSuccess, error }] = useCreateCustomerMutation()
  const [name, setName] = useState(null);
  const onNameChange = e => setName(e.target.value);
  const [first_name, setFirstName] = useState(null);
  const onFirstNameChange = e => setFirstName(e.target.value);
  const [email, setEmail] = useState(null)
  const onEmailChange = e => setEmail(e.target.value);
  const [password, setPassword] = useState(null)
  const onPasswordChange = e => setPassword(e.target.value);

  const checkData = () => {
    if (name.length < 2 || name.length > 30) {
      alert('le Nom doit contenir  entre 3 et 3O lettres');
      return false;
    }
    if (password.length < 2 || password.length > 30) {
      alert('le Nom doit contenir  entre 3 et 3O lettres');
      return false;
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkData() === false) { return;};
    createCustomer({ body: { name, first_name, email, password } });
  }
  
  if (isSuccess) { 
   const origin = userLocation || '/';
   navigate(origin);
  }

  if (error) {
   alert('Erreur lors de l\'envoi du formulaire')
    navigate('/signup')
    
  };

  return (

      <Container component="main" maxWidth="xs">
        
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
            Créer un compte
          </Typography>
          <Box component="form"  noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <TextField  
                 value={first_name}
                 onChange={onFirstNameChange} 
                  required
                  fullWidth
                  id="first_name"
                  label="Prénom"
                autoFocus
                sx={{bgcolor: 'transparent'}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={name}
                  onChange={onNameChange}
                  required
                  fullWidth
                  id="lastName"
                  label="Nom"
                />
              </Grid>
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
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Je souhaites souscrire à la newsletter Hypnos."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor:'#92AAC7', color:'black'  }}
            >
              S'enregistrer
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to="/signin" variant="body2">
                  Déjà un compte? connectez vous
                </NavLink>
              </Grid>
            </Grid>
          </Box>
      </Box>
      </Container>

  );
}

export default SignUp