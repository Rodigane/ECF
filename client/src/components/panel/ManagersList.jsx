import * as React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
import { useSelector } from 'react-redux';
import { useGetSuitesQuery } from '../../api/apiSlice';


export default function SuitesList() {
  const hotelId = useSelector(state => state.hotel.hotel)
  let { data , isLoading, isSuccess, isError } = useGetSuitesQuery(hotelId);
  let suites;
  isSuccess ?  suites = data.data.suites : null;   
  suites ? console.log(suites ) : null;

  return (
    <>
    <Typography variant="h3" align="center">
    Les Suites
</Typography>    
    <Table sx={{ minWidth:"640px" }} aria-label="simple table">
      <TableContainer component={Paper}>
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
            <TableCell align="center">Hotel</TableCell>
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
              <TableCell align="center">{suite.hotel_id}</TableCell>
              <TableCell align="center"><Button>Modifier</Button></TableCell>
              <TableCell align="center"><Button>Supprimer</Button></TableCell>

            </TableRow>
          ))}
            </TableBody>
            <Button>Ajouter une suite</Button>
            </>
      : <p>Loading</p>}
      
      </TableContainer >

      </Table>
    
      </>  
  );
}
    