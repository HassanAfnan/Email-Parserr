import React from 'react'
import { 
    Routes,
    Route,
  } from "react-router-dom";
import Login from '../pages/authentication/Login';
import Home from '../pages/main/Home';
import Register from '../pages/authentication/Register';

const Navigation = () => {
  return (
   <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/register" element={<Register /> } />
       <Route path="/home" element={<Home />} />
   </Routes>
  )
}

export default Navigation