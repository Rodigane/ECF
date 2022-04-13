import React, { useState } from 'react';
import { Avatar, Button, TextField, Paper, Checkbox, Alert, Grid, Box, Typography, Container, Select, InputLabel, MenuItem, FormControl } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useContactMutation } from '../api/apiSlice';
import { useSelector } from 'react-redux';
import SnackbarAlert from './Buttons/Snackbar';


const Contact = () => {
   const queryState = useSelector(state => state.query.queryState)
    const user = useSelector(state => state.user.user)
    const [name, setName] = useState("" || user.name);
    const onNameChange = e => setName(e.target.value);
    const [first_name, setFirstName] = useState("" || user.first_name);
    const onFirstNameChange = e => setFirstName(e.target.value);
    const [email, setEmail] = useState("" || user.email)
    const onEmailChange = e => setEmail(e.target.value);
    const [message, setMessage] = useState("")
    const onMessageChange = e => setMessage(e.target.value);
    const [subject, setSubject] = useState("");
    const onSubjectChange = e => setSubject(e.target.value);
    
    const [sendForm, { isSuccess : success }] = useContactMutation()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      sendForm({ body: { name, first_name, email, message, subject } });
    }
    
  if (success) {<Alert severity="success">Votre message a été envoyé avec succès</Alert>}
  
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
          <ContactsIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Nous contacter
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
        <FormControl fullWidth>
          <InputLabel id="subject">Sujet</InputLabel>
          <Select
          margin="dense"
          id="subject"
          label="Sujet"
          type="text"
          fullWidth
          value={subject}
          onChange={onSubjectChange}
          >
          <MenuItem value={'reclamation'}>Réclamation</MenuItem>
          <MenuItem value={'service'}>Commander un service supplémentaire</MenuItem>
          <MenuItem value={'info'}>Avoir plus de renseignements sur une suite</MenuItem>
          <MenuItem value={'trouble'}>Un soucis avec le site</MenuItem>
                  </Select>
                  </FormControl>
            </Grid>
            <Grid item xs={12}>
            <TextField
                value={message}
                onChange={onMessageChange}
                multiline
                maxRows={4}
                required
                fullWidth
                label="Votre message"
                type="text"
                id="message"
              />
            </Grid>
         
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
              sx={{ mt: 3, mb: 2,backgroundColor:'#92AAC7', color:'black' }}
          >
            Envoyer
          </Button>
          <Grid container justifyContent="flex-end">
          </Grid>
        </Box>
        </Box>
        {queryState === 'success' ? <SnackbarAlert message='Votre mail a été envoyé avec succès' severity='success' /> : null}
        {queryState === 400 ? <SnackbarAlert message="une erreur est survenue" severity='error' /> : null}
    </Container>
          
    )
}

export default Contact
