import React, { useState, useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Alert, Snackbar } from "@mui/material"
import EditButton from '../../Buttons/EditButton';
import {  useUpdateSuiteMutation } from '../../../api/apiSlice';
import { useDispatch } from 'react-redux';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SuiteEdit(elem) {
  const suite= elem.suite
 

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  

  
 
  const [title, setTitle] = useState(suite.title);
  const onTitleChange = e => setTitle(e.target.value);
  const [image, setImage] = useState(suite.image);
  const onImageChange = e => setImage(e.target.value);
  const [description, setDescription] = useState(suite.description);
  const onDescriptionChange = e => setDescription(e.target.value);
  const [image_gallery, setImage_gallery] = useState(suite.image_gallery);
  const onImageGalleryChange = e => setImage_gallery( e.target.value);
  const [booking_link, setBookingLink] = useState(suite.booking_link);
  const onBookingLinkChange = e => setBookingLink(e.target.value);
  const [price, setPrice] = useState(suite.price);
  const onPriceChange = e => setPrice(e.target.value);
  const [displayFeedback, setDisplayFeedback] = useState(false)
  const [updateSuite ,data, isLoading, isSuccess, isError] = useUpdateSuiteMutation()
  const dispatch = useDispatch();

  const handleUpdate = () => {
    updateSuite({ suite_id: suite.suite_id, body: { title, image, description, image_gallery, booking_link, price } });
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
          Vous pouvez maintenant modifier les informations de la suite {title} .
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Nom de la suite"
          type="text"
          fullWidth
          value={title}
          onChange={onTitleChange}
        />
        <TextField
          margin="dense"
          id="image"
          label="Image"
          type="text"
          fullWidth
          value={image}
          onChange={onImageChange}
        />
        <TextField
          margin="dense"
          id="description"
          label="Description de la suite"
          type="text"
          value={description}
          fullWidth
          onChange={onDescriptionChange}
        />
        <TextField
          margin="dense"
          id="image_gallery"
          label="Image Gallery"
          type="text"
          fullWidth
          value={image_gallery}
          onChange={onImageGalleryChange}
        />
        <TextField
          margin="dense"
          id="booking_link"
          label="Lien booking"
          type="text"
          fullWidth
          value={booking_link}
          onChange={onBookingLinkChange}
        />
        <TextField
          margin="dense"
          id="price"
          label="Prix d'une nuit"
          type="number"
          fullWidth
          value={price}
          onChange={onPriceChange}
        />

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
    {isLoading && <p>Modification en cours</p>}
    </>
  );
}
