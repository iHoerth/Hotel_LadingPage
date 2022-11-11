import { BrowserRouter,Routes,Route } from "react-router-dom"
import { useState,useContext } from "react";

import useLocalStorage from "./Services/useLocalStorage";
import { Context } from "./Context/Context";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import DatePick from "./Components/DatePick";
import Home from "./Pages/Home/Home"
import RoomsContainer from "./Pages/Rooms/RoomsContainer";
import Location from "./Pages/Location/Location";

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/*' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/rooms' element={<RoomsContainer />}/>
          <Route path='/services' element={<Home />}/>
          <Route path='/location' element={<Location />}/>
          <Route path='/datepick' element={<DatePick />}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App

