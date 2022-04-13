import React, { useEffect} from "react"
import { Typography, Paper, Box, Container, Grid } from "@mui/material"
import { useGetSuitesQuery } from "../../api/apiSlice"
import SuiteCard from "./SuiteCard"
import { useSelector } from "react-redux"

const Suites = () => {
     // We're retrieving the hotel_id from the store
    const hotelId = useSelector(state => state.hotel.hotel)
    let { data , isLoading, isSuccess, isError } = useGetSuitesQuery(hotelId);
    let suites;
    isSuccess ?  suites = data.data.suites : null;   
    suites ? console.log(suites) : null;
  

    return (
        <>
            <Typography variant="h3" align="center" component="h3">Nos Suites</Typography>
            <Box>
              {  isError ? (
                  <p>Ooops un erreur est survenu</p>
                ) : isLoading ? (
                <p>Loading</p>
                ) : isSuccess ? (
                <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={4}>
                  { suites.map((suite) => (
                    <Grid item key={suite.suite_id} xs={12} sm={6} md={6}>
                        <SuiteCard key={suite.suite_id} suite={suite} />
                    </Grid>
                  ))}
                </Grid>
              </Container>)
                : null}
            </Box>                
        </>
    )
}

export default Suites