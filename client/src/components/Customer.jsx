import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSuite } from "../reducers/suiteSlice";
import { useGetCustomerQuery, useGetCustomerReservationsQuery } from "../api/apiSlice";
import { Grid, Button,  Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { Link } from "react-router-dom";

const Customer = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.user);
    const token = useSelector(state => state.user.token);

    const { data: customers } = useGetCustomerQuery({ customer_id: user.customer_id, token: token });
    console.log(customers?.data?.customers);
    const customer = customers?.data?.customers;

    let {data} = useGetCustomerReservationsQuery({ customer_id: user.customer_id, token: token })
    let reservations;
    data ? 
    reservations = data?.data?.reservations : null;   
    reservations ? console.log(reservations) : console.log('non');
    return (
        <>
        <h2>Customer page</h2>
            Bonjour vous êtes connecté en tant que  {user.name} {user.first_name} votre token est {token}
            <>
        <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        >
            <Grid item md={12} sx={{backgroundColor:'red'}}>
        <Box>
    <Typography variant="H2" >  Compte Client </Typography>
         
    <Typography variant="p"> {customer ? <p>Bonjour {customer?.first_name}  {customer?.name} </p> : null}</Typography>
    <Table sx={{ minWidth: "100%" }}  aria-label="simple table">
        <TableContainer component={Paper} align="left">
            {reservations ?
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
                            <TableBody >
                                                {reservations.map((reservation) =>
                                                    <TableRow
                                                        key={reservation.reservation_id}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" sx={{ maxWidth: "150px" }}>
                                                           coucou
                                                        </TableCell>
                                                        <TableCell align="center" >{reservation.start_date}</TableCell>
                                                        <TableCell align="center"  >{reservation.start_date}</TableCell>
                                                        <TableCell align="center" >ville</TableCell>
                                                        <TableCell align="center" >{reservation.options}</TableCell>
                                                        <TableCell align="center">{reservation.cost}</TableCell>
                                                        <TableCell align="center"><Link path to="/hotel/suite"><Button onClick={()=>dispatch(selectSuite(reservation.suite_id))}>Voir la suite</Button></Link></TableCell>
                                                        <TableCell align="center">bouton</TableCell>
                                                           

                                                    </TableRow>
                                                ) }
                    </TableBody>
                   
                </>
                : <p>Loading</p>}
      
        </TableContainer >

            </Table>
    
    </Box>
      
        </Grid>
    </Grid>    
        </>
        </>
    )
}

export default Customer







