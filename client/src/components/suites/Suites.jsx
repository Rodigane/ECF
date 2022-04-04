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
         <Typography variant="h2" mt={2} mb={2} component="h2" sx={{fontSize:{xs:'34px', fontWeight:'bold'}}}>Nos Suites</Typography>
            <Paper elevation={3} >
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
            </Paper>
        </>
    )
}

export default Suites