import React from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteButton = () => {
  return (
    <Button variant="contained" color="error" endIcon={<DeleteIcon/> }> Supprimer </Button>
  )
}

export default DeleteButton