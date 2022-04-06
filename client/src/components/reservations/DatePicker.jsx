import  React, { useState, useEffect } from 'react';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {Box, TextField, Button } from '@mui/material';
import frLocale from 'date-fns/locale/fr';
import format from 'date-fns/format';
import { useSelector, useDispatch } from 'react-redux';
import { useGetReservationsQuery, useCreateReservationMutation } from '../../api/apiSlice';


export default function DatePicker() {

  const [value, setValue] = useState([null, null]);
  const [option, setOption] = useState("");
  const onOptionChange = e => setOption(e.target.value);
  // ! Retrieving Suite_id from the store to request the db
  const suiteId = useSelector(state => state.suite.suite)
  const user = useSelector(state => state.user)
  const hotel = useSelector(state => state.hotel)
  console.info(suiteId)
  // ! Fetching data from reservations in the db    
  const { data, isSucces } = useGetReservationsQuery(suiteId);
  let reservations;
  data ? reservations = data.data.reservations : null;
 

// TODO  Calculate the number of night, and the cost (suite.price * nb_night) / Create an array with the reserved date
    //TODO   Compare the selected date with the array of reserved date, if !== we can dispatch the reservation if not error
    const nb_night = 3;
    const cost = 99;
  // ? function that return an array with all the dates from the first day to the last day
  // ? excluding the last day
  const getDatesInRange = (startDate, endDate) => {
    const date = new Date(startDate);
    const endD = new Date(endDate);
    const dates = [];
    
    // ! the result of my function were on day ahead, so i fixe that with thoses two lines
    date.setDate(date.getDate() - 1);
    endD.setDate(endD.getDate() - 1);

    while (date < endD) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
  
    return dates;
  }
  let dateRaw = [];
  // ! Here the function to exclude certain date from the datepicker
  const DateReserved = (date) => {
   
    reservations ?
      reservations.map(reservation => 
        
          dateRaw = dateRaw.concat(getDatesInRange(new Date(reservation.start_date), new Date(reservation.end_date)))
      ) : null
 //   console.log(dateRaw.map(date => format(new Date(date),"yyyy-MM-dd")))
    return dateRaw.includes(date.getTime());  
  }

  //reservations ? reservations.map(reservation => console.log(reservation)) : null;
  // ! Handle Reservation
  const [createReservation, { isLoading: isUpdating }] = useCreateReservationMutation()
// TODO change the customer_id by a real one
  const handleReservation = () => {
    createReservation({suite_id : suiteId, customer_id: user.user.customer_id,token: user.token, body: {start_date: value[0], end_date : value[1], option, nb_night, cost, hotel  } })
  }
 
  return (
   <> 
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale} >
     
      <DateRangePicker
        disablePast
        startText="Date d'arrivée"
        endText="Date du départ"
        value={value}
        shouldDisableDate={DateReserved}
        toolbarTitle="Selectionner vos dates de séjours"
        onChange={(newValue) => {
          setValue(newValue);
        }}
        
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> au  </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
        
      />
        {console.log(new Date(value[0]).getTime())}
        {console.log(new Date(value[1]).getTime())}
      </LocalizationProvider>
      
      <TextField
          autoFocus
          margin="dense"
          id="option"
          label="commentaires"
          type="text"
          fullWidth
          value={option}
          onChange={onOptionChange}
        />
    <Button variant="contained" onClick={handleReservation} >Valider</Button>
</>
  );
}
