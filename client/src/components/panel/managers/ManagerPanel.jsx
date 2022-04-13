import React, {useState} from "react"
import {Grid, Typography, Box, List, Container, Collapse, ListItemText, ListItemButton, ListItemIcon, Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
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
        <Container maxWidth={{lg:"xl",md:"md"}}>
        <Grid
        container
        alignItems="stretch"
        >
        <Grid item lg={12} xl={2}  mt={2} >
        <Typography component="h2" variant="h5" align="center"> MANAGER MENU</Typography>  
            <List
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
        <Grid item xs={12} md={10}>
        <Container>        
                         
                <HotelList />
                         
        </Container>
        </Grid>
    </Grid>    
        </Container>
    )
}

export default ManagerPanel