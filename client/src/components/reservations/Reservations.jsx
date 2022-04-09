import React, { useState } from "react";
import { Grid, Box, MenuItem, Button, Typography } from "@mui/material";
import HotelPicker from "./HotelPicker";
import SuitePicker from "./SuitePicker";
import DatePicker from "./DatePicker";
import { useSelector } from "react-redux";
import Suite from "../suites/Suite";


const Reservation = () => {
    const suiteId = useSelector(state => state.suite.suite)

    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} >
                <Typography variant="h2" mt={3} mb={6}>Reservation</Typography>
        </Grid>
        <Grid item xs={12} md={6} >
                <HotelPicker />
        </Grid>
        <Grid item xs={12} md={6}>
                <SuitePicker />
        </Grid>
        <Grid item xs={12} md={6}>
              
        </Grid>
        <Grid item xs={12}>
            <DatePicker />
        </Grid>
        <Grid item xs={12} mt={6} >
            { suiteId ? <Suite /> : null}
            </Grid>
        </Grid>
    )
}

export default Reservation