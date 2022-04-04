import Autocomplete from '@mui/material/Autocomplete';
import React, { useState } from "react";
import { TextField, Box, MenuItem } from "@mui/material";
import { useGetHotelsQuery } from "../../api/apiSlice";
import { useDispatch } from "react-redux";
import { selectHotel } from "../../reducers/hotelSlice";

const HotelPicker = () => {

  const dispatch = useDispatch();
    let { data , isLoading, isSuccess, isError } = useGetHotelsQuery();
    let hotels;
    isSuccess ? hotels = data.data.hotels : null; 
    
    const [hotel, setHotel] = useState("")
    const handleChange = (event) => {
      setHotel(event.target.value) 
      dispatch(selectHotel(event.target.value))
    };

  return(
    <Autocomplete
    id="select-hotel"
        label="Hotel"
        select
    value={hotel}
    onChange={ handleChange}
      helperText="Choississez votre établissement"
      SelectProps={{
        native: true,
      }}
    >
      {hotels ? hotels.map((option) => (
        <option key={option.hotel_id} value={option.hotel_id}>
          {option.name} - {option.city}
        </option>
      )) : null}
    </Autocomplete>
  )
    }
             


export default HotelPicker