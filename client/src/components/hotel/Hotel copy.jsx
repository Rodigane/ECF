import React from "react"
import { Typography, Paper, Box, Container, Grid,ImageList, ImageListItem, ImageListItemBar, Card, CardMedia, CardContent } from "@mui/material"
import { useSelector } from "react-redux";
import { useGetHotelQuery } from "../../api/apiSlice";
import Suites from "../suites/Suites";


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
      <Grid container mt={4}>
        <Grid item >
          <ImageList >
          <ImageListItem >
            <img
              src={`/${hotel.photo}?w=248&fit=crop&auto=format`}
              alt={hotel.name}
              loading="lazy"
              sx={{maxHeight:'420px'}}
            />
            <ImageListItemBar 
              title={hotel.name}
              subtitle={hotel.city}    
            />
          </ImageListItem>
          <Grid item ml={6}>
          <Typography variant="h2" mt={2} mb={10 } align="center" component="h2" sx={{fontSize:{xs:'34px', fontWeight:'bold'}}}>Hotel {hotel.name}</Typography>
          
          <Typography variant="p">
          {hotel.description}
          </Typography>
          </Grid>
        </ImageList>
      </Grid>
    </Grid>
  
      : <p>Loading ....</p>
      
      }  
      { hotel ?
        <Suites />
    : <p>Loading ....</p>}
       
      </Container>
    )
    }

export default Hotel


/**
 * 
        <Box>
            
        <Typography variant="h2" mt={2} mb={2} component="h2" sx={{fontSize:{xs:'34px', fontWeight:'bold'}}}>Hotel {hotel.name}</Typography>
        <ImageList sx={{/ width: 500, height: 450 }}>
        <ImageListItem>
          <img
            src={`${hotel.photo}`}
            srcSet={`${hotel.photo}`}
            alt={hotel.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={hotel.name}
            subtitle={hotel.city}
          />
        </ImageListItem>
    </ImageList>
 
        <p>BLABLABLABLABLABLA</p>
    
        </Box>
        
 */