import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, MenuItem, Select, InputLabel, FormHelperText } from "@mui/material"
import EditButton from '../../Buttons/EditButton';
import {useUpdateManagerMutation, useGetHotelsQuery} from '../../../api/apiSlice';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ManagerEdit(user) {
  
  const { data, isLoading, isSuccess, isError } = useGetHotelsQuery(); 
  let hotels;
  isSuccess ? hotels = data.data.hotels : null;
  const [open, setOpen] = useState(false);

    const manager = user.user;
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  const [name, setName] = useState(manager.name);
  const onNameChange = e => setName(e.target.value);
  const [first_name, setfirstName] = useState(manager.first_name);
  const onFirstNameChange = e => setfirstName(e.target.value);
  const [email, setEmail] = useState(manager.email);
  const onEmailChange = e => setEmail(e.target.value);
  const [role, setRole] = useState(manager.role);
  const onRoleChange = e => setRole(e.target.value);
  const [hotelId, setHotelId] = useState(manager.hotel_id);
  const onHotelIdChange = e => setHotelId(e.target.value);
  const [updateManager, { isLoading: isUpdating }] = useUpdateManagerMutation()
  const handleUpdate = () => {
    updateManager({user_id : manager.user_id, body: { name, first_name, email, role, hotelId } }) &&
      handleClose();
  }
   
  

  return (
  
        <>
      
   
      < Button onClick = { handleClickOpen } >
         <EditButton />
      </Button >

    <Dialog open={open} onClose={handleClose} TransitionComponent={Transition} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Modifier</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Vous pouvez modifier les informations du manager .
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nom"
          type="text"
          fullWidth
          value={name}
          onChange={onNameChange}
        />
        <TextField
          margin="dense"
          id="first_name"
          label="Prénom"
          type="text"
          fullWidth
          value={first_name}
          onChange={onFirstNameChange}
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          type="email"
          value={email}
          fullWidth
          onChange={onEmailChange}
        />
          <InputLabel id="role">Role</InputLabel>
          <Select
          margin="dense"
          id="role"
          label="Role"
          labelId="Role"
          type="text"
          fullWidth
          value={role}
          onChange={onRoleChange}
          >
            <MenuItem value={"admin"}>Administrateur</MenuItem>
            <MenuItem value={"manager"}>Manager</MenuItem>
          </Select>
          <InputLabel id="role">Hotel</InputLabel>
          <Select
          margin="dense"
          id="hotel"
          label="Hotel"
          labelId="Hotel"
          type="text"
          fullWidth
          value={hotelId}
          onChange={onHotelIdChange}
          >
           { hotels?.map(hotel =>
            <MenuItem key={hotel?.hotel_id} value={hotel?.hotel_id}>{hotel?.city}-{hotel?.name}</MenuItem>
            )} 
          </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Annuler
        </Button>
        <Button onClick={handleUpdate} color="primary">
          Valider
        </Button>
      </DialogActions>
    </Dialog> 
      
    </>
  );
}
