import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'

 const HotelCard = ({hotel}) => {
     return(
        <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
        <CardMedia
        component="img"
        sx={{
         maxHeight: '220px',
         alignItems:'center'
        }}
        src={`${hotel.photo}`}
        alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
            {hotel.name}
        </Typography>
        <Typography mb={3}>
            {hotel.city} - {hotel.address}
        </Typography>
        <Typography>
            {hotel.description}
        </Typography>
            </CardContent>
        <CardActions sx={{justifyContent: 'center'}}>
        <Button size="small">Voir les suites</Button>

        </CardActions>
        </Card>
     )}

 export default HotelCard