import { Paper, Box, Typography, Button, Grid, Container} from "@mui/material"
import React from "react"
import herobg from "/assets/photos/hero.jpg"
import { NavLink } from "react-router-dom"


const HeroSection = () => {
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${herobg})`,
                height: {xs: `50vh`, lg:`90vh`},
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
            
            <Grid container sx={{ height: '100%', p:1 }}>
            <Grid xs={12} />
                <Grid xs={0}  lg={ 2}/>
                    <Grid item xs={12}  md={8}  >
                      <Typography variant='h3' align="center" component='h1'    > Hypnos, Lorem ipsum dolor sit amet. </Typography>  
                    </Grid> 
                    <Grid xs={2} lg={5}></Grid>
                    <Grid item xs={10} md={7} >
                     <Typography variant='h5'> Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>  
                </Grid>   
                <Grid xs={12}/>
                    <Grid item xs={6} md={9}></Grid>
                    <Grid item xs={6} md={3} >
                        <NavLink className='link' path to ="/hotels">
                        <Button variant="contained" size="large" sx={{ backgroundColor: '#E2DFAE', color: 'black', fontSize:{xs:11, sm:18, md:19 }}}>
                          Nos établissements
                        </Button>
                        </NavLink>
                        </Grid> 
                
        </Grid>
 

        </Paper>
    )
}

export default HeroSection
