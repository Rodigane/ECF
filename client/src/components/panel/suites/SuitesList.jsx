import * as React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Container, Box } from '@mui/material'
import { useSelector } from 'react-redux';
import { useGetSuitesQuery } from '../../../api/apiSlice';
import DeleteButton from '../../Buttons/DeleteButton';
import SuiteEdit from './SuiteEdit';
import SuiteCreate from './SuiteCreate';
import SuiteDelete from './SuiteDelete';
import SnackbarAlert from '../../Buttons/Snackbar';

export default function SuitesList() {
  const hotelId = useSelector(state => state.hotel.hotel.hotel_id)
  let { data , isLoading, isSuccess, isError } = useGetSuitesQuery(hotelId);
  let suites;
  isSuccess ? 
    suites = data.data.suites : null;   

  const queryState = useSelector(state => state.query.queryState)

  return (
    
    <Grid container >
      <Grid item xs={12}>
    <Typography variant="h3" mt={2} mb={2} ml={2}>
    Les Suites
        </Typography>    
      </Grid>
        <Grid item xs={12} >
        <Box component="paper"
            sx={{
            display: 'block',
            width: 'auto',
            overflowX: 'scroll'
            }} >
    <Table aria-label="simple table" >
      <TableContainer  component={Paper} align="left">
        {suites ? 
          <>
        <TableHead>
          <TableRow>
            <TableCell>Suite</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Gallerie d'images</TableCell>
            <TableCell align="center">Lien Booking</TableCell>
            <TableCell align="center">Prix</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {suites.map((suite) => (
            <TableRow
              key={suite.suite_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {suite.title}
              </TableCell>
              <TableCell align="center">{suite.image}</TableCell>
              <TableCell align="center" noWrap="true" sx={{ maxWidth:"50px", overflow:"hidden",  textOverflow: 'ellipsis'}}>{suite.description}</TableCell>
              <TableCell align="center" noWrap="true" sx={{ maxWidth:"50px", overflow:"hidden", textOverflow: 'ellipsis'}}>{suite.image_gallery}</TableCell>
              <TableCell align="center">{suite.booking_link}</TableCell>
              <TableCell align="center">{suite.price}</TableCell>
              <TableCell align="center"><SuiteEdit suite={suite}/></TableCell>
              <TableCell align="center"><SuiteDelete suite={suite.suite_id} /></TableCell>

            </TableRow>
          ))}
            </TableBody>
                
            </>
      : <p>Loading</p>}
      
      </TableContainer >

            </Table>
            </Box>
        </Grid>
        {queryState === 'success' ? <SnackbarAlert message='Votre changement est bien pris en compte' severity='success' /> : null}
        {queryState === 400 ? <SnackbarAlert message="une erreur est survenue" severity='error' /> : null}
        <Grid xs={12} mb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <SuiteCreate    hotel={hotelId} />
        </Grid>
      </Grid>  
     
  );
}
