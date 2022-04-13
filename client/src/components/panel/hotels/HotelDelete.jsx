import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material"
import DeleteButton from '../../Buttons/DeleteButton';
import { useSelector } from 'react-redux';
import { useDeleteHotelMutation } from '../../../api/apiSlice';
import SnackbarAlert from '../../Buttons/Snackbar';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HotelDelete() {
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hotel = useSelector(state => state.hotel.hotel);
  const queryState = useSelector(state => state.query.queryState)

  const [deleteHotel, { isLoading: isUpdating }] = useDeleteHotelMutation()
  const handleDelete = () => {
    deleteHotel( hotel.hotel_id) &&
      handleClose();
  }
  return (
    <>
      <Button onClick={handleClickOpen}>
        <DeleteButton />
      </Button>

      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Supprimer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Etes vous sûres de vouloir supprimer définitivement cette hotel
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleDelete} variant="contained" color="error">
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
      {queryState === 'success' ? <SnackbarAlert message='Votre changement est bien pris en compte' severity='success' /> : null}
      {queryState === 400 ? <SnackbarAlert message="une erreur est survenue" severity='error' /> : null}   

    </>
  );
}
