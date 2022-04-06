import React, { useState } from 'react';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useCreateCustomerMutation } from '../api/apiSlice';

export default function SignUp() {

  const [createCustomer, { isLoading: isUpdating }] = useCreateCustomerMutation()
  const [name, setName] = useState("");
  const onNameChange = e => setName(e.target.value);
  const [first_name, setFirstName] = useState("");
  const onFirstNameChange = e => setFirstName(e.target.value);
  const [email, setEmail] = useState("")
  const onEmailChange = e => setEmail(e.target.value);
  const [password, setPassword] = useState("")
  const onPasswordChange = e => setPassword(e.target.value);

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createCustomer({ body: { name, first_name, email, password } });
  }
  

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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Créer un compte
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
              sx={{ mt: 3, mb: 2 }}
            >
              S'enregistrer
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Déjà un compte? connectez vous
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

  );
}