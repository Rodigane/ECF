import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material"
import DeleteButton from '../../Buttons/DeleteButton';
import { useDeleteReservationMutation } from '../../../api/apiSlice';
import { useSelector } from 'react-redux';
import SnackbarAlert from '../../Buttons/Snackbar';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ReservationDelete( reservation ) {
  
  const queryState = useSelector(state => state.query.queryState)

  const [open, setOpen] = useState(false);
  const token = useSelector(state => state.user.token)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // ! Controle if to day is more than 3 days before start date.
  const isCancelAvailable = () => {
  // 3 days in ms
  const threeDaysLimit = 259200000;
  // Today date in ms
  const today = new Date().getTime();
  // Start date in ms
  const start_date = new Date(reservation?.reservation?.start_date).getTime();
  // difference between start date and to day in ms
  const daysBeforeReservation = start_date - today;
  const diff = daysBeforeReservation - threeDaysLimit;
  // return false 'diff' is < 'threeDaysLimit'  else we can cancelled
    if (diff < 0) {
    return(false)  
    } else {
      return(true)
    }
  }

  isCancelAvailable();
  const [deleteReservation, { isLoading: isUpdating }] = useDeleteReservationMutation()
  const handleDelete = () => {
    deleteReservation( {reservation_id : reservation?.reservation?.reservation_id, token : token}) &&
      handleClose();
  }
  return (
    <>
      <Button onClick={handleClickOpen}>
        <DeleteButton />
      </Button>

      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Annuler</DialogTitle>
        <DialogContent>
          <DialogContentText>
          { isCancelAvailable() ?  'Etes vous sûres de vouloir annuler  cette réservation ?' : 'Votre réservation débute dans moins de trois jours, vous ne pouvez plus l\'annuler.'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          { isCancelAvailable() ?
             <Button onClick={handleDelete} variant="contained" color="error" >
             SUPPRIMER
           </Button>
            :
            <Button onClick={handleDelete} variant="contained" color="error" disabled>
            SUPPRIMER
          </Button>
          }
          
        </DialogActions>
      </Dialog>
      {queryState === 'success' ? <SnackbarAlert message='Votre changement est bien pris en compte' severity='success' /> : null}
      {queryState === 400 ? <SnackbarAlert message="une erreur est survenue" severity='error' /> : null}    
    </>
  );
}
