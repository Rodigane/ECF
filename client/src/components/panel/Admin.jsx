import React, {useState} from "react"
import {Grid, Typography, Box, List, Button, Collapse, ListItemText, ListItemButton, ListItemIcon, Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useGetHotelsQuery } from '../../api/apiSlice'
import SuitesList from "./suites/SuitesList";
import HotelList from "./hotels/HotelList";
import { useDispatch } from "react-redux";
import { selectHotel } from '../../reducers/hotelSlice';
import HotelCreate from "./hotels/HotelCreate";


const Admin = () => {
  const { data, isLoading, isSuccess, isError } = useGetHotelsQuery();
    
  let hotels;
  isSuccess ? hotels = data.data.hotels : null;
  hotels ? console.log(hotels) : console.log('ras');
    
    const dispatch = useDispatch();



    return (
        <>
        <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        >
        <Grid item md={2}  alignItems="stretch"  sx={{backgroundColor:'pink', height:"80vh", textAlign:"center"}}>
            ADMIN MENU
            <List
              sx={{ width: '100%', maxWidth: 360}}
              component="nav"
              aria-labelledby="nested-list-subheader"
            > 
            <Accordion>
            <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
        <Typography>Etablissements</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul>
            {hotels ? hotels.map((hotel) => (
              <ListItemButton key={hotel.hotel_id} onClick={() => dispatch(selectHotel({ hotel_id: hotel.hotel_id, name: hotel.name, city: hotel.city, address: hotel.address, description: hotel.description, photo: hotel.photo }))}>       
                <ListItemText  primary={hotel.name} secondary={hotel.city} />
            </ListItemButton>
            )) 
            : <p>Loading</p>
            }
        <HotelCreate />

        </ul>

        </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMore />}
             aria-controls="panel2a-content"
             id="panel2a-header"
            >
        <Typography>Suites</Typography>
        </AccordionSummary>
            <AccordionDetails>
                <ul>
                  {hotels ? hotels.map((hotel) => (
                    <ListItemButton  key={hotel.hotel_id} onClick={() => dispatch(selectHotel( hotel.hotel_id ))}>       
                        <ListItemText  primary={hotel.name} secondary={hotel.city} />
                    </ListItemButton>
                    )) 
                    : <p>Loading</p>
                                    }
                </ul>
        </AccordionDetails>
                        </Accordion>
                        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
        <Typography>Gérants</Typography>
        </AccordionSummary>
        <AccordionDetails>
                                
         </AccordionDetails>
        </Accordion>
                        
        </List>
                 
        </Grid>
            <Grid item md={10} sx={{backgroundColor:'red'}}>
        <Box>
            <Typography variant="H2" >  Pannel d'administration </Typography>
        </Box>
        <Box>
              <HotelList />               
        </Box>
        </Grid>
    </Grid>    
        </>
    )
}

export default Admin