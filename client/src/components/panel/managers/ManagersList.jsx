import * as React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
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
    <>
    <Typography variant="h3" align="center">
    Les Managers
</Typography>    
    <Table sx={{ minWidth:"640px" }} aria-label="simple table">
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
    
      </>  
  );
}
    