import { Paper, Box, Typography, Button, Grid} from "@mui/material"
import React from "react"
import herobg from "../assets/photos/hero.jpg"
import { Link } from "react-router-dom"


const HeroSection = () => {
    return (
        <Paper
            sx={{
                position: 'relative',
                mt: { xs: 2, md: 1.5 },
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${herobg})`,
                height: {xs: `50vh`, md:`90vh`},
                zIndex:'0',
            }}
        >
        <Box
        sx={{
            position: 'absolute',
            zIndex:'-1',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: '#fafafa5e',
        }}
            />
            <Box sx={{ flexGrow:1 }}>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={0} md={2}></Grid> 
                    <Grid item xs={ 12 }md={10} sx={{ mt: 6, display:'flex', justifyContent:{xs: 'center', md:'flex-start'}}}>
                        <Typography
                        component="h1"
                        variant="h1"
                        sx={{
                            fontSize: { xs:'16px', md: '48px'},
                        }}>
                        Hypnos, Lorem ipsum dolor sit amet.  
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={0} md={12} sx={{height : {xs: '1rem', md:'3rem'}}}></Grid>
                    <Grid item xs={0} md={4} ></Grid>
                    <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent:{xs: 'center', md:'flex-start'} }}>
                        <Typography
                        component="p"
                        sx={{fontSize: {xs:'9px', md:'24px'}}}
                        >                
                        Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                         
                    </Grid>  
                    <Grid item xs={8}></Grid>
                    <Grid item xs={4}>
                    <Button variant="contained" size="small" sx={{mt:6, mr:6, backgroundColor: '#E2DFAE', color: 'red', display: { xs: 'flex', md: 'none' }}}>
                    Nos établissements
                        </Button> 
                        </Grid>
                    <Grid item xs={0} md={12} sx={{backgroundColor: '', height : '16rem'}}></Grid>
                    <Grid item xs={0} md={8} sx={{backgroundColor: ''}}></Grid>
                    <Grid item>
                        <Link path to ="/etablissements">
                        <Button variant="contained" size="large" sx={{ backgroundColor: '#E2DFAE', color: 'black', display: { xs: 'none', md: 'block' } }}>
                    Nos établissements
                        </Button>
                        </Link>
                    </Grid>
                                    
            </Grid> 
            </Box>
            

        </Paper>
    )
}

export default HeroSection
