import { Card, CardMedia, CardContent, Typography, CardActions, Button,ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectSuite } from '../../reducers/hotelSlice';

 const SuiteCard = ({suite}) => {
  const dispatch = useDispatch();

     return(
        <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
                    component="img"
                    sx= {{ maxWidth:'auto', height:' 240px', minWidth:'240px' }}
                    image={`/${suite.image}`}
                    alt="random"
                  />
        <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
            {suite.title}
        </Typography>
      
        <Typography>
            {suite.description}
        </Typography>
        <Typography>
            {suite.price}€
        </Typography>
            </CardContent>
        <CardActions sx={{justifyContent: 'center'}}>
        <Link to={`/hotel/${suite.title}`}> 
        <Button onClick={() => dispatch(selectSuite( suite.suite_id))} size="small">En savoir Plus</Button>
        </Link>
        </CardActions>
        </Card>
     )}

 export default SuiteCard