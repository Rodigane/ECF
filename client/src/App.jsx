import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Box } from '@mui/system';
// TODO index of components
import Admin from './components/panel/Admin';
import Contact from './components/Contact';
import Customer from './components/Customer';
import Hotels from './components/hotels/Hotels';
import Home from './components/Home';
import Hotel from './components/hotel/Hotel';
import Manager from './components/Manager';
import Navbar from './components/Navbar';
import Suite from './components/suites/Suite';
import Suites from './components/suites/Suites';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Reservation from './components/reservations/Reservations';
import {PrivateRoute} from './components/PrivateRoute';
// TODO index of components
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import frLocale from 'date-fns/locale/fr';



function App() {
  

  return (
    <div className="App">
       <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
        <CssBaseline />
        <div className='Navbar'>
        <Navbar />
        </div>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale} >

        <div className="main">
          <Routes>
            <Route exact element={<Home />} path="/"></Route>
            <Route exact element={<Hotels />} path="/hotels"></Route>
            <Route exact element={<Hotel  />} path="/hotel/:city"></Route>
            <Route exact element={<Suites />} path="/hotel/suites"></Route>
            <Route exact element={<Suite />} path="/hotel/suite"></Route>
            <Route exact element={<Customer />} path="/moncompte"></Route>
            <Route exact element={<Admin />} path="/admin"></Route>
            <Route exact element={<Manager />} path="/manager"></Route>
            <Route exact element={<Contact />} path="/contact"></Route>
            <Route exact element={<SignUp />} path="/signup"></Route>
            <Route exact element={<SignIn />} path="/signin"></Route>
            <Route path="/reservation"
              element={
                <PrivateRoute>
                  <Reservation />
                </PrivateRoute>
              }
            />
            {/**<Route exact element={<Reservation />} path="/reservation"></Route> */}  
        </Routes>
          </div>
          </LocalizationProvider>
        <div className='footer'>
          <Footer />
        </div>
      </Box>
    </div>
  )
}

export default App
