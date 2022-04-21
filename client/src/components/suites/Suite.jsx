import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { useGetSuiteQuery } from "../../api/apiSlice";
import { ImageList, ImageListItem, Typography, Box, Button, Container, Grid, ButtonGroup } from "@mui/material";
import {NavLink} from "react-router-dom";
import Image from 'mui-image';

const Suite = () => {
    const dispatch = useDispatch();
    const suiteId = useSelector(state => state.suite.suite)
    console.log(`suite id is ${suiteId}`)
    let { data , isLoading, isSuccess, isError } = useGetSuiteQuery(suiteId);
    let suite;    
    isSuccess ? suite =  data.data.suites : null;  
   
    let gallery;
    suite ? gallery = suite.image_gallery : null;

    return (
      <Container maxWidth='md' sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography variant="h2" align="center" mt={3} mb={6}>{suite?.title}</Typography>
        
        {
          gallery ?
            <Box>
                <ImageList cols={1}   >
                  {gallery.map((photo) => (
                    <ImageListItem key={photo}  >
                      <Image
                        src={`/${photo}`}
                        height='100%'
                        width='100%'
                        fit="cover"
                        duration={1500}
                      />
                    </ImageListItem>
                  ))}
                </ImageList> 
          </Box> 
                 
          :
          null
    }
      { suite ?
      <Box mt={3} sx={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
      <Typography variant="string" align="center">
      {suite.description}
      </Typography>
              <Typography mt={2} variant="subtitle1" align="center">
     Prix pour une nuit :  {suite.price} €
              </Typography>
    
             <Box component="div" sx={{display: 'flex', justifyContent: 'center'}} mt={3} mb={3}> 
          <Button onClick={ () => window.open("http://booking.com")}>Booking.com</Button>
          <NavLink className='link' to={`/reservation`}> 
          <Button  sx={{backgroundColor:'#92AAC7', color:'black'}} size="large" variant="contained"  onClick={() => dispatch(selectSuite( suite.suite_id))}>Réserver</Button>
          </NavLink>
          </Box>      
                </Box>
      : null
      }

</Container>
    )
}

export default Suite

/**
 * 


 */