import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../Main/Sellerhome';
import Orders from '../Main/Orders';
import Profile from '../Sellerprofile/Sellerprofile';
import Managemenu from './ManageMenu';
import Slogin from '../Sellerprofile/Slogin';
import './SellerNavBar.css'
import Registration from '../Sellerprofile/SRegistration';
import config from '../../config'
export default function SellersNavBar() {
  const navigate=useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isSellerLoggedIn');
    localStorage.removeItem('seller');
    navigate('/');
    window.location.reload()
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <Link to="/" className="navbar-brand" style={{ fontSize: "50px" }}>FeastExpress</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link" style={{ fontSize: "20px" }}> Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/orders" className="nav-link" style={{ fontSize: "20px" }}>Orders</Link>
            </li>
            <li className="nav-item">
              <Link to="/manage" className="nav-link" style={{ fontSize: "20px" }}>ManageMenu</Link>
            </li>
            <li className="nav-item">
              <Link to="/Sellerprofile/:email" className="nav-link" style={{ fontSize: "20px" }}>Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-link" onClick={handleLogout} style={{ fontSize: "20px" }}>Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
         <Route path='/home' element={<Home />} exact />
        <Route path='/orders' element={<Orders />} exact /> 
        <Route path='/manage/*' element={<Managemenu />} />
        <Route path='/Sellerprofile/:email' element={<Profile />} exact />
        <Route path='/logout/*' element={<Slogin />} />
        <Route path='/sellerregister' element={<Registration/>} exact/>
      </Routes>
    </div>
  );
}