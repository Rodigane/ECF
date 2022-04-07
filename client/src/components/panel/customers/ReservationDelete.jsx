import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material"
import DeleteButton from '../../Buttons/DeleteButton';
import { useDeleteReservationMutation } from '../../../api/apiSlice';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ReservationDelete( reservation ) {
  
  const [open, setOpen] = useState(false);
console.log(reservation.reservation_id)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [deleteReservation, { isLoading: isUpdating }] = useDeleteReservationMutation()
  const handleDelete = () => {
    deleteReservation( reservation.reservation_id) &&
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
            Etes vous sûres de vouloir supprimer  cette réservation ?
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
    </>
  );
}
