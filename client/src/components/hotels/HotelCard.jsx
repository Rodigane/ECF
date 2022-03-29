import { Card, CardMedia, CardContent, Typography, CardActions, Button,ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import {Link} from 'react-router-dom';
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
                    sx= {{ maxWidth:'auto', height:' 240px', minWidth:'240px' }}
                    image={`${hotel.photo}`}
                    alt="random"
                  />
        <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
            {hotel.city}
        </Typography>
      
        <Typography>
            {hotel.description}
        </Typography>
            </CardContent>
        <CardActions sx={{justifyContent: 'center'}}>
        <Link to={`/hotel/${hotel.city}`}> 
        <Button onClick={() => dispatch(selectHotel( hotel.hotel_id))} size="small">Voir les suites</Button>
        </Link>
        </CardActions>
        </Card>
     )}

 export default HotelCard