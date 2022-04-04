import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material"
import { useCreateHotelMutation } from '../../../api/apiSlice';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function HotelCreate() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const [name, setName] = useState("");
  const onNameChange = e => setName(e.target.value);
  const [city, setCity] = useState("");
  const onCityChange = e => setCity(e.target.value);
  const [address, setAddress] = useState("");
  const onAddressChange = e => setAddress(e.target.value);
  const [description, setDescription] = useState("");
  const onDescriptionChange = e => setDescription(e.target.value);
  const [manager, setManager] = useState("");
  const onManagerChange = e => setManager(e.target.value);
  const [photo, setPhoto] = useState("");
  const onPhotoChange = e => setPhoto(e.target.value);

  const [createHotel, { isLoading: isUpdating }] = useCreateHotelMutation()
  const handleCreate = () => {
      createHotel({ body :  {name, city, address, description, photo, manager}} ) &&
      handleClose();
    // useUpdateHotelMutation( hotel.hotel_id, (name, city, address, description, photo, manager))
  }
  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
      Ajouter un hôtel 
      </Button>

      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Modifier</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Vous pouvez maintenant Ajouter un nouvel établissement.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nom de l'hotel"
            type="text"
            fullWidth
            value={name}
            onChange={onNameChange}
          />
          <TextField
            margin="dense"
            id="city"
            label="Ville"
            type="text"
            fullWidth
            value={city}
            onChange={onCityChange}
          />
          <TextField
            margin="dense"
            id="address"
            label="adresse l'hotel"
            type="text"
            value={address}
            fullWidth
            onChange={onAddressChange}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            value={description}
            onChange={onDescriptionChange}
          />
          <TextField
            margin="dense"
            id="photo"
            label="Photo de l'hotel"
            type="text"
            fullWidth
            value={photo}
            onChange={onPhotoChange}
          />
          <TextField
            margin="dense"
            id="manager"
            label="Manager de l'hotel"
            type="number"
            fullWidth
            value={manager}
            onChange={onManagerChange}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleCreate} color="primary">
            Valider
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
