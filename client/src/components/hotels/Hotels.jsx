import React from "react"
import { Typography, Paper, Box, Container, Grid } from "@mui/material"
import { useGetHotelsQuery } from "../../api/apiSlice"
import HotelCard from "./HotelCard"


const Hotels = () => {

      let { data , isLoading, isSuccess, isError } = useGetHotelsQuery();
      let hotels;
      isSuccess ?  hotels = data.data.hotels : null;   

    return (
      <>

            <Typography align="center" variant="h3" mt={4} mb={2} component="h2" >Nos établissements</Typography>
       
                <Box>
              {  isError ? (
                  <p>Ooops un erreur est survenu</p>
                ) : isLoading ? (
                <p>Loading</p>
                ) : data ? (
                <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={4}>
                  { hotels.map((hotel) => (
                    <Grid item key={hotel.hotel_id} xs={12} sm={6} md={4}>
                        <HotelCard key={hotel.hotel_id} hotel={hotel} />
                    </Grid>
                  ))}
                </Grid>
              </Container>)
                : null}
            </Box>                
        </>
    )
}

export default Hotels