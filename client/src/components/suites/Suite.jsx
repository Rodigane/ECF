import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { useGetSuiteQuery } from "../../api/apiSlice";
import { ImageList, ImageListItem, Typography, Box, Button } from "@mui/material";
import {Link} from "react-router-dom";

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
      <>
        <Typography variant="h2" mb={6}>{suite?.title}</Typography>
        <Box sx={{display: 'flex'}}>
      {  
      gallery ?
      <Box sx={{flex:4}} m={3}>
            <ImageList  sx={{ width: '500px'}} cols={2} >
            {gallery.map((photo) => (
              <ImageListItem key={photo}  >
                <img
                  src={`/${photo}`}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          </Box>
          :
          null
    }
      { suite ?
      <Box m={3}>
      
      <Typography variant="string" align="justify">
      {suite.description}
      </Typography>
      <Typography variant="subtitle1">
     Prix pour une nuit :  {suite.price} €
        </Typography>
        <Link to={suite.booking_link}> 
          <Button size="large">Lien booking</Button>
        </Link>
        <Link to={`/reservation`}> 
                <Button variant="contained" onClick={() => dispatch(selectSuite( suite.suite_id))} size="small">Réserver</Button>
        </Link>
      </Box>
      : null
      }

    </Box>
</>
    )
}

export default Suite

/**
 * 


 */