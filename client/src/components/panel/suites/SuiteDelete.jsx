import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material"
import DeleteButton from '../../Buttons/DeleteButton';
import { useSelector } from 'react-redux';
import { useDeleteSuiteMutation } from '../../../api/apiSlice';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SuiteDelete(suite) {
  const [open, setOpen] = useState(false);
console.log(suite.suite)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [deleteSuite, { isLoading: isUpdating }] = useDeleteSuiteMutation()
  const handleDelete = () => {
    deleteSuite( suite.suite) &&
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
            Etes vous sûres de vouloir supprimer définitivement cette suite ?
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
