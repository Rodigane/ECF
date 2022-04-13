import React, {useState} from "react"
import {Grid, Typography, Box, List, Button, ListItemText, ListItemButton,  Container, Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useGetHotelsQuery } from '../../api/apiSlice'
import HotelList from "./hotels/HotelList";
import { useDispatch } from "react-redux";
import { selectHotel } from '../../reducers/hotelSlice';
import HotelCreate from "./hotels/HotelCreate";
import ManagerCreate from "./managers/ManagersCreate";
import ManagerList from "./managers/ManagersList";


const Admin = () => {
  const { data, isLoading, isSuccess, isError } = useGetHotelsQuery();
    
  let hotels;
  isSuccess ? hotels = data.data.hotels : null;
  hotels ? console.log(hotels) : console.log('ras');
    let [displayTabs, setDisplayTabs] = useState("")
    const dispatch = useDispatch();
 


    return (
        <Container maxWidth='xl'>
        <Grid container  spacing={2}>
        <Grid item xs={12} md={2} mt={2}>
         <Typography component="h2" variant="h5" align="center"> ADMIN MENU</Typography>  
            <List
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
              <ListItemButton key={hotel.hotel_id} onClick={() => dispatch(selectHotel({ hotel_id: hotel.hotel_id, name: hotel.name, city: hotel.city, address: hotel.address, description: hotel.description, photo: hotel.photo, manager_id: hotel.manager_id })) && setDisplayTabs("hotel")}>       
              <ListItemText  primary={hotel.name} secondary={hotel.city} />
            </ListItemButton>
            )) 
            : <p>Loading</p>
            }
        <HotelCreate />

        </ul>

        </AccordionDetails>
              </Accordion>
              
        <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          >
        <Typography>Managers</Typography>
        </AccordionSummary>
                <AccordionDetails>
                <Button onClick={()=> setDisplayTabs("manager")}>Voir les Managers</Button>   
                  <ManagerCreate />  
         </AccordionDetails>
        </Accordion>
                        
        </List>
                 
        </Grid>
          <Grid item xs={12} md={10}>
            <Container>
            
              {
               displayTabs === "manager" ?
                  <ManagerList /> :
                  displayTabs === 'hotel' ?
                    <HotelList />  
                    :
                    <Typography variant="h2" mt={4} align="center" >  Pannel d'administration </Typography>

                  
              }
                 
                </Container>
        </Grid>
        </Grid>
        
        </Container>
    )
}

export default Admin