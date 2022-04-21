import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSuite } from "../../../reducers/suiteSlice";
import { useGetCustomerQuery, useGetCustomerReservationsQuery } from "../../../api/apiSlice";
import { Grid, Button,  Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container} from '@mui/material';
import { NavLink } from "react-router-dom";
import ReservationDelete from "./ReservationDelete";
import HotelInfo from "../../hotel/HotelInfo";

import format from 'date-fns/format';


const Customer = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.user);
    const token = useSelector(state => state.user.token);
    const { data: customers } = useGetCustomerQuery({ user_id: user.user_id, token: token });
    console.log(customers?.data?.users);
    const customer = customers?.data?.users;
  
    let {data} = useGetCustomerReservationsQuery({ customer_id: user.user_id, token: token })
    let reservations;
    data ? 
    reservations = data?.data?.reservations : null;   
    reservations ? console.log(reservations) : console.log('non');
    
    // D date in ms
    const today = new Date().getTime();
   // If today in ms is > thant startDate in ms, the reservation's date is in the past
    const isPassed = (startDate) => {
        if ((today - (new Date(startDate).getTime())) > 0) {
            return (true)
        } else {
            return (false)
        }
   }    ;  
    
    //reservation?.reservation?.start_date
    return (

 <Container maxWidth="lg">       
       
    <Typography variant="h2" mt={2} align="center">  Compte Client </Typography>
         
    <Typography mt={8}  align="left" variant="h5"> {customer ? <p>Bonjour {customer?.first_name}  {customer?.name}, ci dessous la liste de vos réservations : </p> : null}</Typography>
            <Box component="paper"
            sx={{
                display: 'block',
                width: 'auto',
                overflowX: 'scroll'
            }} >
        <Table sx={{ minWidth: "100%" }}  aria-label="simple table">
        <TableContainer component={Paper} align="center">
            {reservations && user ?
                <>

                    <TableHead >
                        <TableRow >
                            <TableCell>Reservations</TableCell>
                            <TableCell align="center">Check in</TableCell>
                            <TableCell align="center">Check out</TableCell>
                            <TableCell align="center">Ville</TableCell>
                            <TableCell align="center">options</TableCell>
                            <TableCell align="center">Prix</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    
                            <TableBody  >
                            {reservations.map((reservation) =>
                                <TableRow
                                    key={reservation.reservation_id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {! isPassed(reservation.start_date) ?
                                        <>
                                    <TableCell component="th" scope="row" sx={{ maxWidth: "150px" }}>
                                    </TableCell>
                                    <TableCell align="center" sx={{ minWidth: "110px" }} >{format(new Date(reservation.start_date),"dd-MM-yyyy")}</TableCell>
                                    <TableCell align="center" sx={{ minWidth: "110px" }} >{format(new Date(reservation.end_date),"dd-MM-yyyy")}</TableCell>
                                    <TableCell align="center" ><HotelInfo hotel_id={reservation.city} /></TableCell>
                                    <TableCell align="center" >{reservation.options}</TableCell>
                                   <TableCell align="center">{reservation.cost} €</TableCell>
                                    <TableCell align="center"><NavLink path to="/hotel/suite"><Button onClick={()=>dispatch(selectSuite(reservation.suite_id))}>Voir la suite</Button></NavLink></TableCell>
                                    <TableCell align="center"><ReservationDelete reservation={reservation} /></TableCell>
                                        </> : 
                                        <>
                                        <TableCell component="th" scope="row" sx={{ maxWidth: "150px" }}>
                                        </TableCell>
                                        <TableCell align="center" sx={{ minWidth: "110px" }} >{format(new Date(reservation.start_date),"dd-MM-yyyy")}</TableCell>
                                        <TableCell align="center" sx={{ minWidth: "110px" }} >{format(new Date(reservation.end_date),"dd-MM-yyyy")}</TableCell>
                                        <TableCell align="center" ><HotelInfo hotel_id={reservation.city} /></TableCell>
                                        <TableCell align="center" >{reservation.options}</TableCell>
                                        <TableCell align="center">{reservation.cost} €</TableCell>
                                        <TableCell align="center"><NavLink path to="/hotel/suite"><Button onClick={()=>dispatch(selectSuite(reservation.suite_id))}>Voir la suite</Button></NavLink></TableCell>
                                        <TableCell align="center"><Typography variant="p">Votre réservation a déjà eu lieu</Typography></TableCell>

                                        </>
                                   }
                                </TableRow>
                                
                            ) }
                    </TableBody>
                   
                </>
                : <p>Loading</p>}
      
        </TableContainer >

                    </Table>
            </Box>
   
      
   
            </Container>    
    )
}

export default Customer







