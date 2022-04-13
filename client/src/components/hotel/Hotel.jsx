import React from "react"
import { Typography, Paper, Box, Container, Grid,ImageList, ImageListItem, ImageListItemBar, Card, CardMedia, CardContent } from "@mui/material"
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
            <Grid item xs={12} sx={{maxHeight:'350px', border:'solid 4px red'}} mt={6}>
          <Image
          src={`/${hotel.photo}`}
              height='100%'
              width='100%'
              fit="cover"
          />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" mt={6}   mb={4} align='center' component="h2">Hotel {hotel.name} - {hotel.city} </Typography>
              </Grid>
            <Grid item xs={12}>
            <Container maxWidth="md" align='justify' >
                <Typography variant="p" >
                {hotel.description}
                </Typography>
            </Container>
              </Grid>
          </Grid> 
   
      : <p>Loading ....</p>
     
      }  
          {hotel ?
            
              <Suites />
            
              : <p>Loading ....</p>
          

          }
      
      </Container>
    )
    }

export default Hotel
