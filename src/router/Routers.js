import React from "react";
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import Contact from "../pages/Contact";
import Event from "../pages/Event";
import About from "../pages/About";
import Club from "../pages/Club";
import Clubdesc from"../pages/Clubdesc";
import Booking from "../components/Booking/Booking.jsx"
import Gallery from"../pages/gallery.jsx"
import TechEvent from "../pages/technicalEvent.jsx";


const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/event' element={<Event/>}/>
            <Route path='/club' element={<Club/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/clubdesc' element={<Clubdesc/>}/>
            <Route path='/booking' element={<Booking/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/techevent' element={<TechEvent/>}/>
            

        </Routes>
    )
};
    
export default Routers;