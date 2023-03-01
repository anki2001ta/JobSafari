import React from 'react'
import {Routes,Route} from "react-router-dom";
import Employee from '../Pages/Employee';
import Employer from '../Pages/Employer';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/SignUp';
import SingleEmployee from '../Pages/SingleEmployee';
import SingleEmployer from '../Pages/SingleEmployer';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path='/employer' element={<Employer/>} ></Route>
        <Route path='/employee' element={<Employee/>} ></Route>
        <Route path='/singleEmployer/:id' element={<SingleEmployer/>} ></Route>
        <Route path='/singleEmployee/:id' element={<SingleEmployee/>} ></Route>
    </Routes>
  )
}

export default AllRoutes