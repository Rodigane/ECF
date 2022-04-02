import React from "react"
import { useSelector } from "react-redux";
import { useGetSuiteQuery } from "../../api/apiSlice";
import { ImageList, ImageListItem, Typography, Box } from "@mui/material";
import { TabPanelUnstyled } from "@mui/base";

const Suite = () => {
    const suiteId = useSelector(state => state.suite.suite)
    console.log(`suite id is ${suiteId}`)
    let { data , isLoading, isSuccess, isError } = useGetSuiteQuery(suiteId);
    let suite;    
    isSuccess ? suite =  data.data.suites : null;  
   
    let gallery;
    suite ? gallery = suite.image_gallery : null;
   // gallery? gallery.map((photo)=> (console.log(photo) )): null;

    return (
      <>
        <h2>Suite page</h2>
        <Box sx={{display: 'flex'}}>
      {  
      gallery ?
      <Box sx={{flex:4}}>
            <ImageList variant="masonry"  sx={{ width: 500, height: 450 }} cols={3} gap={8}>
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
      <Box>
      <Typography>
        {suite.title}
      </Typography>
      <Typography>
      {suite.description}
      </Typography>
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