import React, {useState} from "react"
import {Grid, Typography, Box, List, Button, Collapse, ListItemText, ListItemButton, ListItemIcon, Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from "react-redux";
import { useGetSuitesQuery, useGetHotelQuery } from "../../../api/apiSlice";
import { selectHotel } from "../../../reducers/hotelSlice";
import SuitesList from "../suites/SuitesList";
import HotelList from "../hotels/HotelList";

const ManagerPanel = () => {
    const dispatch = useDispatch();
    const hotelId = useSelector(state => state.user.user.hotel_id)
    console.log(hotelId)
    let { data : hotel, isSuccess : hotelIsSuccess } = useGetHotelQuery(hotelId);
    const hotelDetails = hotel?.data?.hotels;

    console.log(hotelId)
    let { data , isLoading, isSuccess, isError } = useGetSuitesQuery(hotelId);
    let suites;
    
      suites = data?.data?.suites;   
    
    return (
        <>
        <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        >
        <Grid item md={2}  alignItems="stretch"  sx={{backgroundColor:'pink', height:"80vh", textAlign:"center"}}>
            Manager Menu
            <List
              sx={{ width: '100%', maxWidth: 360}}
              component="nav"
              aria-labelledby="nested-list-subheader"
            > 
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMore />}
             aria-controls="panel2a-content"
             id="panel2a-header"
            >
        <Typography>Mon établissement</Typography>
        </AccordionSummary>
            <AccordionDetails>
                <ul>
                <ListItemButton  key={hotelDetails?.hotel_id} onClick={() => dispatch(selectHotel({ hotel_id: hotelDetails.hotel_id, name: hotelDetails.name, city: hotelDetails.city, address: hotelDetails.address, description: hotelDetails.description, photo: hotelDetails.photo }))}>       
                        <ListItemText  primary={hotelDetails?.name} secondary={hotelDetails?.city} />
                </ListItemButton>
                </ul>
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

export default ManagerPanel