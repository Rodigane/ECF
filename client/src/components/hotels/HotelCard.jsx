import { Card, CardMedia, CardContent, Typography, CardActions, Button,ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import {NavLink} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectHotel } from '../../reducers/hotelSlice';

 const HotelCard = ({hotel}) => {
  const dispatch = useDispatch();

     return(
        <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
                    component="img"
                    sx= {{ maxWidth:'auto', height:' 340px', minWidth:'240px' }}
                    image={`${hotel.photo}`}
                    alt="Photo de l'hotel"
                  />
        <CardContent sx={{ flexGrow: 1, backgroundColor:'#E2DFA2' }}>
        <Typography align="center" gutterBottom variant="h4" component="h2">
            {hotel.city}
        </Typography>
      
        <Typography variant="p" align="justify">
            {hotel.description}
        </Typography>
            </CardContent>
        <CardActions  sx={{justifyContent: 'center', backgroundColor:'#E2DFA2', padding:3}}>
        <NavLink  className='link' to={`/hotel/${hotel.city}`}> 
        <Button variant="contained" sx={{backgroundColor:'#92AAC7', color:'black'}}  onClick={() => dispatch(selectHotel( hotel.hotel_id ))}>Voir les suites</Button>
        </NavLink>
        </CardActions>
        </Card>
     )}

 export default HotelCard