import React, { useState } from "react";
import { Select,FormControl, InputLabel, Grid, MenuItem } from "@mui/material";
import { useGetSuitesQuery } from "../../api/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectSuite } from "../../reducers/suiteSlice";
const SuitePicker = () => {
  const dispatch = useDispatch();
  const hotelId = useSelector(state => state.hotel.hotel);
   const suiteSelected = useSelector(state => state.suite.suite) 
    let { data , isLoading, isSuccess, isError } = useGetSuitesQuery(hotelId);

    let suites;
    isSuccess ?  suites = data.data.suites : null;   
    const [suite, setSuite] = useState("")
    const handleChange = (event) => {
      setSuite(event.target.value);
      dispatch(selectSuite(event.target.value))
    };
  

  return (
      <Grid container justifyContent="flex-start" >
      <FormControl fullWidth>
    <InputLabel id="select-suite">Suites</InputLabel>
   <Select
    id="select-suite"
    label="Suites"  
    select
    value={suite || suiteSelected}
    onChange={handleChange}
    helperText="Choississez votre suite"
      >
        {suites ? suites.map((option) => (
        <MenuItem key={option.suite_id} value={option.suite_id}>
       {option.title} 
        </MenuItem>
          ))  : null}
    </Select>
    </FormControl>  
      </Grid>
    )
    }
             


export default SuitePicker