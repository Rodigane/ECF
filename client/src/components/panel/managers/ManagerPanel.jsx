import React, {useState} from "react"
import {Grid, Typography,  Container } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { useGetSuitesQuery, useGetHotelQuery } from "../../../api/apiSlice";
import { selectHotel } from "../../../reducers/hotelSlice";
import HotelList from "../hotels/HotelList";

const ManagerPanel = () => {
    const dispatch = useDispatch();
    const hotelId = useSelector(state => state.user.user.hotel_id)
    console.log(hotelId)
    let { data : hotel, isSuccess : hotelIsSuccess } = useGetHotelQuery(hotelId);
    const hotelDetails = hotel?.data?.hotels;
    hotelDetails && dispatch(selectHotel({ hotel_id: hotelDetails.hotel_id, name: hotelDetails.name, city: hotelDetails.city, address: hotelDetails.address, description: hotelDetails.description, photo: hotelDetails.photo }))
    console.log(hotelId)
    let { data , isLoading, isSuccess, isError } = useGetSuitesQuery(hotelId);
    let suites;
    
      suites = data?.data?.suites;   
    
    return (
        <Container maxWidth={{lg:"xl",md:"md"}}>
        <Grid
        container
        alignItems="stretch"
        >
        <Grid item lg={12}   mt={2} >
        <Typography component="h2" variant="h5" align="center"> MANAGER MENU</Typography>  
        </Grid>
        <Grid item xs={12}>
               
            <HotelList />                
        
        </Grid>
    </Grid>    
        </Container>
    )
}

export default ManagerPanel