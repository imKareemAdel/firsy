import React from 'react'
import Home from '../Home/Home'
import Login from './../Login/Login';
import Register from './../Register/Register';
import Navbar from './../Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <React.Fragment>
    
    <Navbar/>
    <div>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>
      
    </div>
    
    </React.Fragment>
  )
}
