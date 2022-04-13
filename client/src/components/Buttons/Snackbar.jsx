import React, { useState, useEffect} from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { query } from '../../reducers/querySlice';
import { useSelector } from 'react-redux';

const SnackbarAlert = ({message, severity}) => {
    
    const dispatch = useDispatch();
    const notif = useSelector(state => state.query.querystate);
    const [isOpen, setIsOpen] = useState(false);
    const vertical = 'top';
    const horizontal = 'center'

    useEffect(() => {
         setIsOpen(true)
    },
     [notif !== null]
    )
    
    const handleClose = () => {
        dispatch(query('null'));
        setIsOpen(false)
    };
    
    return (
        <div>
          <Snackbar
                anchorOrigin={{vertical, horizontal}}
                open={isOpen}
                onClose={handleClose} 
                autoHideDuration={5000} 
            >
                <Alert severity={severity}>{message}</Alert>
            </Snackbar>
        </div>
      );
}

export default SnackbarAlert