import { useSelector } from 'react-redux';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Container, Box } from '@mui/material';
import HotelEdit from './HotelEdit';
import SuitesList from '../suites/SuitesList';
import HotelDelete from './HotelDelete';
const HotelList = () => {
    const hotel = useSelector(state => state.hotel.hotel)
    const userRole = useSelector(state => state.user.user.role)
    return (
        <Container>
        <Grid container >
            <Grid item xs={12} >
                <Typography variant="h3" ml={2} mt={4} mb={3}>
       { hotel ? hotel.name : null} 
                </Typography>    
            </Grid>
                <Grid item xs={12}   >
        <Box component="paper"
            sx={{
                    display: 'block',
                    width: 'auto',
                    overflowX: 'scroll'    
            }} >    
    <Table aria-label="simple table">
        <TableContainer align="left" component={Paper}>
            {hotel ?
                <>

                    <TableHead >
                        <TableRow >
                            <TableCell>Hotel</TableCell>
                            <TableCell align="center">Ville</TableCell>
                            <TableCell align="center">Adresse</TableCell>
                            <TableCell align="center">Photo</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Hotel ID</TableCell>
                            { userRole === "manager" ? null :
                            <TableCell align="center">Manager ID</TableCell>
                            }
                            
                        </TableRow>
                    </TableHead>
                            <TableBody >
                        {
                            <TableRow
                                key={hotel.hotel_id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                            >
                                <TableCell component="th" scope="row" sx={{maxWidth: "150px"}}>
                                    {hotel.name}
                                </TableCell>
                                <TableCell align="center" sx={{maxWidth: "150px"}}>{hotel.city}</TableCell>
                                <TableCell align="center" sx={{maxWidth: "150px"}} >{hotel.address}</TableCell>
                                <TableCell align="center" noWrap="true" sx={{ maxWidth: "100px", overflow: "hidden", textOverflow: 'ellipsis' }}>{hotel.photo}</TableCell>
                                <TableCell align="center" noWrap="true" sx={{ maxWidth: "100px", overflow: "hidden", textOverflow: 'ellipsis' }}>{hotel.description}</TableCell>
                                <TableCell align="center">{hotel.hotel_id}</TableCell>
                                {userRole === "manager" ? null :
                                <TableCell align="center">{hotel.manager_id}</TableCell>   
                                }
                                <TableCell align="center"><HotelEdit /></TableCell>
                                <TableCell align="center"><HotelDelete /></TableCell>

                            </TableRow>
                        }
                    </TableBody>
                   
                </>
                : <p>Loading</p>}
      
        </TableContainer >

                        </Table>
                        </Box>
                </Grid>
                <Grid item xs={12}  > 
            {hotel ?
            
                      <SuitesList />
            
                    
            : null
            }
           </Grid>
            </Grid>
            </Container>
    )}
export default HotelList


