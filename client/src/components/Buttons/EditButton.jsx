import React from 'react'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

const EditButton = () => {
  return (
    <Button variant="contained"><EditIcon sx={{ marginRight : "10px"}} /> Modifier </Button>
  )
}

export default EditButton