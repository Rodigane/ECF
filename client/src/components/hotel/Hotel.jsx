import React from "react"
import { Typography, CircularProgress, Box, Container, Grid,ImageList, ImageListItem, ImageListItemBar, Card, CardMedia, CardContent } from "@mui/material"
import { useSelector } from "react-redux";
import { useGetHotelQuery } from "../../api/apiSlice";
import Suites from "../suites/Suites";
import Image from 'mui-image';

const Hotel = () => {

 // We're retrieving the hotel_id from the store
  const hotelId = useSelector(state => state.hotel.hotel);

  let { data, isSuccess } = useGetHotelQuery(hotelId);
  let hotel
  isSuccess ?   hotel = data.data.hotels : console.log('nothing fetch');
  hotel ? console.log(hotel) : null;
  

    return (
      <Container maxWidth="xl">
      
      { hotel  ? 
            
            <Grid container mb={6}>
            <Grid item xs={12} sx={{maxHeight:'350px'}} mt={6}>
          <Image
          src={`/${hotel.photo}`}
              height='100%'
              width='100%'
                fit="cover"
                duration={1500}
          />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" mt={6}   mb={2} align='center' component="h2">Hotel {hotel.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h4' align="center" mb={2}>{hotel.address} {hotel.city}. </Typography>
            </Grid>
            <Grid item xs={12}>
            <Container maxWidth="md" align='justify' >
                <Typography variant="p" >
                {hotel.description}
                </Typography>
            </Container>
              </Grid>
          </Grid> 
   
      : <Box sx={{display:'flex', justifyContent:'center', marginTop:'20%'}}><CircularProgress /></Box>
     
      }  
          {hotel ?
            
              <Suites />
            
              : <Box sx={{display:'flex', justifyContent:'center', marginTop:'20%'}}> <CircularProgress color="secondary" /></Box>
          

          }
      
      </Container>
    )
    }

export default Hotel
