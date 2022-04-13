import * as React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Box } from '@mui/material'
import { useSelector } from 'react-redux';
import { useGetManagersQuery } from '../../../api/apiSlice';
import ManagerDelete from './ManagerDelete';
import ManagerEdit from './ManagerEdit';
import HotelInfo from '../../hotel/HotelInfo';

export default function ManagersList() {
  let { data, isSuccess } = useGetManagersQuery();
  let managers;
  isSuccess ?  managers = data.data.users : null;   
  managers ? console.log(managers) : console.log("ras");
  return (
    <Grid container>
      <Grid item xs={12}>
    <Typography mt={2} mb={2} ml={2} variant="h3" align="center">
    Les Managers
        </Typography>    
      </Grid>
      <Grid item xs={12} mt={2} >
      <Box component="paper"
          sx={{
              mt:8,
              display: 'block',
              width: 'auto',
              overflowX: 'scroll'
              }}>    
    <Table  aria-label="simple table">
      <TableContainer align="center" component={Paper}>
        {managers? 
          <>
        <TableHead>
          <TableRow >
            
            <TableCell align="center">Nom</TableCell>
            <TableCell align="center">Prénom</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Hotel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                {managers.map((manager) => (
                  <TableRow
                    key={manager.user_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {manager.name}
                    </TableCell>
                    <TableCell align="center">{manager.first_name}</TableCell>
                    <TableCell align="center">{manager.email}</TableCell>
                    <TableCell align="center">{manager.role}</TableCell>
                    <TableCell align="center"><HotelInfo hotel_id={manager?.hotel_id}/></TableCell>
                    <TableCell align="center"><ManagerEdit user={manager}/></TableCell>
                    <TableCell align="center"><ManagerDelete userId={manager} /></TableCell>

                  </TableRow>
                ))}
            </TableBody>
            
            </>
      : <p>Loading</p>}
      
      </TableContainer >

          </Table>
          </Box>
      </Grid>
      </Grid>  
  );
}
    