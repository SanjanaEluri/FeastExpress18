// Routes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Slogin from '../components/Slogin';
import Sellerprofile from './Sellerprofile';
import config from '../../config'
const AppRoutes = () => (
  <Routes>
    <Route path="/navbar" element={<NavBar />} />
    <Route path="/slogin" element={<Slogin />} />
    <Route path='/Sellerprofile/:email' element={<Sellerprofile/>}></Route>
    {/* Other routes go here */}
  </Routes>
);

export default AppRoutes;