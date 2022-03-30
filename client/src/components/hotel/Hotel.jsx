import React from "react"
import { Typography, Paper, Box, Container, Grid,ImageList, ImageListItem, ImageListItemBar, Card, CardMedia, CardContent } from "@mui/material"
import { useSelector } from "react-redux";
import { useGetHotelQuery } from "../../api/apiSlice";
import Suites from "../suites/Suites";


const Hotel = () => {

 // We're retrieving the hotel_id from the store
  const hotelId = useSelector(state => state.hotel.hotel)

  let { data, isSuccess } = useGetHotelQuery(hotelId);
  let hotel
  isSuccess ?   hotel = data.data.hotels : console.log('nothing fetch');
  hotel ? console.log(hotel) : null;
  

    return (
      <>
      
      { hotel  ? 
      <Box mx={10} my={6}>
        <Box sx={{display:'flex'}}>
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
          <Box>
          <Typography variant="h2" mt={2} mb={10 } component="h2" sx={{fontSize:{xs:'34px', fontWeight:'bold'}}}>Hotel {hotel.name}</Typography>
          
          <Typography variant="p" sx={{alignSelf:"center"}}>
          {hotel.description}
          </Typography>
          </Box>
        </ImageList>
      </Box>
    </Box>
  
      : <p>Loading ....</p>
      
      }  
      { hotel ?
        <Suites />
    : <p>Loading ....</p>}
       
      </>
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