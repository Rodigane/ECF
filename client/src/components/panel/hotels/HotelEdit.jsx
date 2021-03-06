import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material"
import EditButton from '../../Buttons/EditButton';
import { useSelector } from 'react-redux';
import { useUpdateHotelMutation } from '../../../api/apiSlice';
import SnackbarAlert from '../../Buttons/Snackbar';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HotelEdit() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const queryState = useSelector(state => state.query.queryState)
  const hotel = useSelector(state => state.hotel.hotel);
  const userRole = useSelector(state => state.user.user.role)
  const [name, setName] = useState(hotel.name);
  const onNameChange = e => setName(e.target.value);
  const [city, setCity] = useState(hotel.city);
  const onCityChange = e => setCity(e.target.value);
  const [address, setAddress] = useState(hotel.address);
  const onAddressChange = e => setAddress(e.target.value);
  const [description, setDescription] = useState(hotel.description);
  const onDescriptionChange = e => setDescription(e.target.value);
  const [manager, setManager] = useState(hotel.manager);
  const onManagerChange = e => setManager(e.target.value);
  const [photo, setPhoto] = useState(hotel.photo);
  const onPhotoChange = e => setPhoto(e.target.value);

  const [updateHotel, { isLoading: isUpdating }] = useUpdateHotelMutation({
  fixedCacheKey: 'shared-update_hotel',
})
  const handleUpdate = () => {
    updateHotel({ hotel_id: hotel.hotel_id, body: { name, city, address, description, photo, manager } }) &&
      handleClose();
  }

  return (
    <>
      <Button onClick={handleClickOpen}>
        <EditButton />
      </Button>

      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Modifier</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Vous pouvez maintenant modifier les informations relatives ?? l'??tablissement.
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
          {userRole === 'manager' ? null :
          <TextField
            margin="dense"
            id="manager"
            label="Manager de l'hotel"
            type="number"
            fullWidth
            value={manager}
            onChange={onManagerChange}
          />
          }
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
      {queryState === 'success' ? <SnackbarAlert message='Votre changement est bien pris en compte' severity='success' /> : null}
      {queryState === 400 ? <SnackbarAlert message="une erreur est survenue" severity='error' /> : null}    </>
  );
}
