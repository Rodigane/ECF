import React, { useState } from "react";
import { TextField, Box, MenuItem } from "@mui/material";
import { useGetHotelsQuery, useGetHotelQuery } from "../../api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectHotel } from "../../reducers/hotelSlice";
import { useSelect } from "@mui/base";

const HotelPicker = () => {

  const dispatch = useDispatch();
    let { data , isLoading, isSuccess, isError } = useGetHotelsQuery();
    let hotels;
    isSuccess ? hotels = data.data.hotels : null; 
   const  hotelSelect = useSelector(state => state.hotel.hotel)
  console.log('coucou')
  console.log(hotelSelect);
  const [hotel, setHotel] = useState("")
  if (hotelSelect !== null) {
  // setHotel(hotelSelect)
  } 

    const handleChange = (event) => {
      setHotel(event.target.value) 
      dispatch(selectHotel(event.target.value))
    };

  return(
    <TextField
    id="select-hotel"
        label="Hotel"
        select
    value={hotel || hotelSelect}
    onChange={ handleChange}
      helperText="Choississez votre établissement"
      SelectProps={{
        native: true,
      }}
    >
      {hotels ? hotels.map((option) => (
        <option key={option.hotel_id} value={option.hotel_id} city={option.city} >
          {option.name} - {option.city}
        </option>
      )) : null}
    </TextField>
  )
    }
             


export default HotelPicker