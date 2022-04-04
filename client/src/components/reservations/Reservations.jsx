import React, { useState } from "react";
import { TextField, Box, MenuItem, Button } from "@mui/material";
import HotelPicker from "./HotelPicker";
import SuitePicker from "./SuitePicker";
import DatePicker from "./DatePicker";
import { useSelector } from "react-redux";
import Suite from "../suites/Suite";


const Reservation = () => {
    const suiteId = useSelector(state => state.suite.suite)

    return (
        <>
            <h2>Reservation</h2>
            <Box  sx={{display:'flex', justifyContent:'center'}}>
            <HotelPicker />
            <SuitePicker />
                <DatePicker />
                
            </Box>
            <Box>
            { suiteId ? <Suite /> : null}
            </Box>
        </>
    )
}

export default Reservation