import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import './App.css'

// TODO index of components
import Admin from './components/Admin';
import Contact from './components/Contact';
import Customer from './components/Customer';
import Hotels from './components/Hotels';
import Home from './components/HeroSection';
import Hotel from './components/Hotel';
import Manager from './components/Manager';
import Navbar from './components/Navbar';
import Suite from './components/Suite';
import Suites from './components/Suites';
import Footer from './components/Footer';
// TODO index of components



function App() {
  

  return (
    <div className="App">
      <>
        <CssBaseline />
        <div className='Navbar'>
        <Navbar />
        </div>
        <div className="main">
          <Routes>
            <Route exact element={<Home />} path="/"></Route>
            <Route exact element={<Hotels />} path="/hotels"></Route>
            <Route exact element={<Hotel />} path="/hotel"></Route>
            <Route exact element={<Suites />} path="/hotel/suites"></Route>
            <Route exact element={<Suite />} path="/suite"></Route>
            <Route exact element={<Customer />} path="/moncompte"></Route>
            <Route exact element={<Admin />} path="/admin"></Route>
            <Route exact element={<Manager />} path="/manager"></Route>
            <Route exact element={<Contact />} path="/contact"></Route>
        </Routes>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </>
    </div>
  )
}

export default App
