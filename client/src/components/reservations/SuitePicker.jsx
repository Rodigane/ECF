import React, { useState } from "react";
import { TextField, Box, MenuItem } from "@mui/material";
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
    <TextField
    id="select-suite"
        label="Suites"
        select
    value={suite || suiteSelected}
    onChange={handleChange}
        helperText="Choississez votre suite"
        SelectProps={{
          native: true,
        }}
    >
    {suites ? suites.map((suite) => (
      <option key={suite.suite_id} value={suite.suite_id}>
        {suite.title} 
      </option>
    )) : null}
      </TextField>
    )
    }
             


export default SuitePicker