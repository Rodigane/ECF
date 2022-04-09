import React, { useState } from 'react';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, Select, InputLabel, MenuItem, FormControl } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';

const Contact = () => {
    const [name, setName] = useState("");
    const onNameChange = e => setName(e.target.value);
    const [first_name, setFirstName] = useState("");
    const onFirstNameChange = e => setFirstName(e.target.value);
    const [email, setEmail] = useState("")
    const onEmailChange = e => setEmail(e.target.value);
    const [message, setMessage] = useState("")
    const onMessageChange = e => setMessage(e.target.value);
    const [subject, setSubject] = useState("");
    const onSubjectChange = e => setSubject(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
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
          </Grid>
        </Box>
      </Box>
    </Container>
    )
}

export default Contact
