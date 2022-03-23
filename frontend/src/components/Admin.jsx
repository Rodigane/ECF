import React, {useState} from "react"
import {Grid, Typography, Box, List, ListSubheader, Collapse, ListItemText, ListItemButton, ListItemIcon} from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


const Admin = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

    return (
        <>
        <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        >
            <Grid item md={4}  alignItems="stretch"  sx={{backgroundColor:'pink', height:"80vh", textAlign:"center"}}>
            ADMIN MENU
            <List
      sx={{ width: '100%', maxWidth: 360}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
    >
            <ListItemButton onClick={handleClick}>
        <ListItemText primary="Etablissement 1" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Suite 1" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Suite 2" />
          </ListItemButton>
        </List>
      </Collapse>
      </List>
      <List
      sx={{ width: '100%', maxWidth: 360}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
    >
            <ListItemButton onClick={handleClick}>
        <ListItemText primary="Etablissement 2" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Suite 1" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Suite 2" />
          </ListItemButton>
        </List>
      </Collapse>
      </List>



{
/** 
            <Box sx={{display: "flex", justifyContent: "center"}}>
              <ul>
                  <li>Etablissement 1</li>
                    <ul>
                        <li>Suite 1</li>
                        <li>Suite 2</li>
                        <li>Suite 3</li>
                        <li>Suite 4</li>
                        <li>Suite 5</li>
                        <li>Suite 6</li>
                    </ul>
                  <li>Etablissement 2</li>
                  <ul>
                    <li>Suite 1</li>
                    <li>Suite 2</li>
                    <li>Suite 3</li>
                    <li>Suite 4</li>
                    <li>Suite 5</li>
                    <li>Suite 6</li>
                </ul>
                  <li>Etablissement 3</li>
                  <ul>
                    <li>Suite 1</li>
                    <li>Suite 2</li>
                    <li>Suite 3</li>
                    <li>Suite 4</li>
                    <li>Suite 5</li>
                    <li>Suite 6</li>
                </ul>
                  <li>Etablissement 4</li>
                  <ul>
                    <li>Suite 1</li>
                    <li>Suite 2</li>
                    <li>Suite 3</li>
                    <li>Suite 4</li>
                    <li>Suite 5</li>
                    <li>Suite 6</li>
                </ul>
                  <li>Etablissement 5</li>
                  <ul>
                    <li>Suite 1</li>
                    <li>Suite 2</li>
                    <li>Suite 3</li>
                    <li>Suite 4</li>
                    <li>Suite 5</li>
                    <li>Suite 6</li>
                </ul>
              </ul>
               
            </Box>
    */
          }
</Grid>
            <Grid item md={8} sx={{backgroundColor:'red'}}>
        <Box>
            <Typography variant="H2" >  Pannel d'administration </Typography>
        </Box>
        <Box>
            blablablablablabbazeiug zfubeiozhBGVBzekfnbzizvbgliehzgliHVBDJSKB
        </Box>
        </Grid>
    </Grid>    
        </>
    )
}

export default Admin