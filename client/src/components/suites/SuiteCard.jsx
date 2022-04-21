import { Card, CardMedia, CardContent, Typography, CardActions, Button,ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import {NavLink} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectSuite } from '../../reducers/suiteSlice';
import { Image } from 'mui-image';

 const SuiteCard = ({suite}) => {
  const dispatch = useDispatch();

     return (
         
        <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
                    component="div"
                    sx= {{ maxWidth:'auto', height:' 340px', minWidth:'240px' }}
                    alt="Photo de la suite"
             >
                <Image
          src={`/${suite.image}`}
              height='100%'
              width='100%'
                fit="cover"
                duration={1500}
                 />
                 </CardMedia>
        <CardContent sx={{ flexGrow: 1, backgroundColor:'#E2DFA2' }}>
        <Typography gutterBottom variant="h4" align='center' component="h2" mb={2}>
            {suite.title}
        </Typography>
      
        <Typography variant='p' align='justify'>
            {suite.description}
        </Typography>
        <Typography align='center' mt={2}>
           Prix pour une nuit: {suite.price}€
        </Typography>
            </CardContent>
             <CardActions sx={{ display: 'flex', flexDirection: { xs:'column', md:'row'}, justifyContent: 'center', alignItems:'center', backgroundColor:'#E2DFA2', padding:3}}>
        <NavLink  className='link' to={`/hotel/suite`}> 
                     <Button sx={{ mb: { xs: 2, md: 0 }}} onClick={() => dispatch(selectSuite( suite.suite_id))} >En savoir Plus</Button>
        </NavLink>
        <NavLink className='link' to={`/reservation`}> 
                <Button variant="contained" sx={{backgroundColor:'#92AAC7', color:'black'}} onClick={() => dispatch(selectSuite( suite.suite_id))} >Réserver</Button>
        </NavLink>
        </CardActions>
        </Card>
     )}

 export default SuiteCard