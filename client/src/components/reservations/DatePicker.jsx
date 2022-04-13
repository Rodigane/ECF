import  React, { useState, useEffect } from 'react';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {Box, TextField, Button, Typography, Grid } from '@mui/material';
import frLocale from 'date-fns/locale/fr';
import format from 'date-fns/format';
import { useSelector, useDispatch } from 'react-redux';
import { useGetReservationsQuery, useCreateReservationMutation, useGetSuiteQuery } from '../../api/apiSlice';


export default function DatePicker() {

  const [value, setValue] = useState([null, null]);
  const [option, setOption] = useState("");
  const onOptionChange = e => setOption(e.target.value);
  // ! Retrieving Suite_id from the store to request the db
  const suiteId = useSelector(state => state.suite.suite)
  const user = useSelector(state => state.user)
  const hotel = useSelector(state => state.hotel.hotel)
 
  
  // ! Fetching data from reservations in the db    
  const { data, isSucces } = useGetReservationsQuery(suiteId);
  let reservations;
  reservations = data?.data?.reservations;
  let price;
  const { data: suite, isSuccess : suiteSuccess } = useGetSuiteQuery(suiteId);
  suiteSuccess ? price = suite.data.suites.price : null ;
  
    // TODO  Calculate the number of night, and the cost (suite.price * nb_night) / Create an array with the reserved date
    //TODO   Compare the selected date with the array of reserved date, if !== we can dispatch the reservation if not error
    let nb_night = 0;
    let cost;
  
  // !    --------------------------------   {getDatesInRange}   ----------------------------          !//
  // ! function that return an array [dates] with all the dates between the first day and the last day !//
  // ! -------------------------------- excluding the last day -------------------------------         !//
  const getDatesInRange = (startDate, endDate) => {
    const date = new Date(startDate);
    const endD = new Date(endDate);
    const dates = [];
    while (date < endD) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  }
  // !    -------------------------------------------------------------------------------   !//

  // !    --------------------------------   {getDatesReserved}   ----------------------------  !//
  // ! for each reservations we use the function 'getDatesInRange' to retrieve the dates where the room is booked !//
  // ! and we concat the result in the array [reservedDate]. [ReservedDate] now contained all the date where the room is booked !//
  let reservedDate = [];
  const getDatesReserved = () => {
    reservations?.map(reservation => reservedDate =  reservedDate.concat(getDatesInRange(reservation.start_date, reservation.end_date)))
    //reservations?.map(reservation =>console.log(reservation.start_date))
    reservedDate = reservedDate.map(date => format(new Date(date), "yyyy-MM-dd"));
    return reservedDate;
  }
  // !    -------------------------------------------------------------------------------   !//
  
  // ? If we find some reservations for the selected suites we call the function getDatesReserved.
  reservations ? getDatesReserved() : console.log('No reservations');
  //reservedDate = reservedDate.map(date => format(new Date(date), "yyyy-MM-dd"));

  // !    -------------------------------   {dateToDisabled}   ---------------------------  !//
  // ! Here the function to exclude date from the array [reservedDate] from  the datepicker !//
  // !                     Must return TRUE to the props shouldDisableDate                  !//
  // ! We compare the date from [reservedDate] with 'date' comming from the dataRangePicker !//
  const dateToDisabled = (date) => {
    //console.log(format(new Date(date), "yyyy-MM-dd"))
    return reservedDate.includes(format(new Date(date), "yyyy-MM-dd"));
  }
  // !    ---------------------------   {findCommonElement}   ---------------------------  !//
 
  const findCommonElement = (array1, array2) => {
    // Loop for array1
    for(let i = 0; i < array1.length; i++) {
        // Loop for array2
        for(let j = 0; j < array2.length; j++) {
            // Compare the element of each and
            // every element from both of the
            // arrays
            if(array1[i] === array2[j]) {
                // Return if common element found
                return true;
            }
        }
    }
    // Return if no common element exist
    return false;
}
  // !    -------------------------------     {verifyDate}     ---------------------------  !//
  // !    --------------------------     return TRUE if dates available     --------------  !//
  const verifyDate = (startDate, endDate) => {
  // we're looking for the date the customer wish to reserve.
    let dateWanted = getDatesInRange(new Date(startDate).getTime(),new Date(endDate).getTime());
    dateWanted = dateWanted.map((date => format(new Date(date), "yyyy-MM-dd")));
    console.log(dateWanted.length)
  // we're comparing those dates to the dates allready reserved
    if (findCommonElement(dateWanted, reservedDate)) {
      return false
    } else {
           return true  
           };
  }
  // !    -------------------------------------------------------------------------------   !//
  if (value[0] && value[1] !== null) {
    nb_night = getDatesInRange(value[0], value[1]).length;
    cost = (nb_night * price).toFixed(2);
  }
  // ! Handle Reservation
  const [createReservation, { isLoading: isUpdating }] = useCreateReservationMutation()
  const handleReservation = () => {
    if (verifyDate(value[0], value[1])) {
      createReservation({suite_id : suiteId, user_id: user.user.user_id,token: user.token, body: {start_date: format(new Date(value[0]), "yyyy-MM-dd"), end_date : format(new Date(value[1]), "yyyy-MM-dd"), option, nb_night, cost, hotel  } })
    } else {
      alert('Date non disponible, veuillez choisir d\'autres dates ou une autre suite')
    }
    
  }
 
  return (
   <Grid container alignItems="center" sx={{mt:3}}> 
     <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale} >
     <Grid item xs={12} md={6} sx={{mb:2}}>
      <DateRangePicker
        disablePast
        startText="Date d'arrivée"
          endText="Date du départ"
        value={value}
        shouldDisableDate={dateToDisabled}
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
          </Grid>
      </LocalizationProvider>
      <Grid item xs={12} md={6} sx={{mb:{xs:3 , md:4}}}>
        <TextField
          autoFocus
          fullWidth
          margin="dense"
          id="option"
          multiline
          maxRows={4}
          label="commentaires"
          type="text"
          value={option}
          onChange={onOptionChange}
        />
      </Grid>
      <Grid item xs={12} sx={{ display:'flex', justifyContent:'center', mb:{xs:3 , md:4}}}>
      { 
          nb_night === 1 ? <Typography variant="p">Prix pour {nb_night} nuit : {cost} € </Typography> :
          nb_night > 1 ? <Typography variant="p">Prix pour {nb_night} nuits : {cost} € </Typography> :
          null
      }
      </Grid>
      <Grid item xs={12} sx={{ display:'flex', justifyContent:'center'}} >
      <Button sx={{backgroundColor:'#92AAC7', color:'black'}} size='large' variant="contained" onClick={handleReservation} >Valider</Button>
      </Grid>
</Grid>
  );
}
