import React from "react"
import { Typography, Paper, Box } from "@mui/material"
import { useGetHotelsQuery } from "../api/apiSlice"

let HotelDisplay = ({hotel}) => {
    return (
        <div key={hotel.hotel_id}>
            <h3>{hotel.name}</h3>
            <p>{hotel.address}</p>
        </div>
    )
};


const Hotels = () => {
    let { data , isLoading, isSuccess, isError } = useGetHotelsQuery();
    let hotels;
   
    isSuccess ?  hotels = data.data.hotels : null
    console.log(hotels);
    let content;
    

    return (
        <>
            <Typography variant="h2" mt={2}>Etablissement page</Typography>
            <Paper elevation={3} >
                <Box sx={{height: '68vh'}}>
        
              {  isError ? (
                  <p>Oh oh un erreur est survenu</p>
              ) : isLoading ? (
                <p>Ca charge</p>
            ) : data ? (
                hotels.map((hotel) =>(
                    <HotelDisplay key={hotel.hotel_id} hotel={hotel} />))
            ) : null}
                </Box>                
            </Paper>
        </>
    )
}

export default Hotels