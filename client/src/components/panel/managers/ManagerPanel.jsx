import React, {useState} from "react"
import {Grid, Typography, Box, List, Button, Collapse, ListItemText, ListItemButton, ListItemIcon, Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useDispatch } from "react-redux";
import { useGetSuitesQuery } from "../../../api/apiSlice";
import SuitesList from "../suites/SuitesList";
const ManagerPanel = () => {


    let { data , isLoading, isSuccess, isError } = useGetSuitesQuery(6);
    let suites;
    isSuccess ? 
      suites = data.data.suites : null;   
      suites ? console.log(suites) : console.log('non');
    return (
        <>
        <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        >
        <Grid item md={2}  alignItems="stretch"  sx={{backgroundColor:'pink', height:"80vh", textAlign:"center"}}>
            Manager Menu
            <List
              sx={{ width: '100%', maxWidth: 360}}
              component="nav"
              aria-labelledby="nested-list-subheader"
            > 
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMore />}
             aria-controls="panel2a-content"
             id="panel2a-header"
            >
        <Typography>Suites</Typography>
        </AccordionSummary>
            <AccordionDetails>
                <ul>
                  {suites ? suites.map((suite) => (
                    <ListItemButton  key={suite.suite_id} onClick={() => dispatch(selectSuite( suite.suite_id ))}>       
                        <ListItemText  primary={suite.title}  />
                    </ListItemButton>
                    )) 
                    : <p>Loading</p>
                    }
                </ul>
        </AccordionDetails>
                        </Accordion>
                        
        </List>
                 
        </Grid>
            <Grid item md={10} sx={{backgroundColor:'red'}}>
        <Box>
            <Typography variant="H2" >  Pannel d'administration </Typography>
        </Box>
            <Box>                     
                 
        </Box>
        </Grid>
    </Grid>    
        </>
    )
}

export default ManagerPanel