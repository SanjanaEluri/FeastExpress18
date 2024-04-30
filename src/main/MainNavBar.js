// MainNavBar.js

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact'

import CustomerLogin from './../components/Login';
import CustomerSignIn from './../components/Signin'
import SellerLogin from './../Sellermenu/Sellerprofile/Slogin';
import SellerSignIn from './../Sellermenu/Sellerprofile/SRegistration'
import AdminLogin from './../admin/AdminLogin';
import './style.css';

// Change this line:
// export default function MainNavBar({onAdminLogin,onCustomerLogin,onSellerLogin}){

// To this:
export default function MainNavBar({onAdminLogin, onCustomerLogin, onSellerLogin}) {
  return (
   <div>
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
    <Link to="/navbar" className="navbar-brand" style={{ fontSize: "50px" }}>
      FeastExpress
    </Link>
         <ul className="navbar-nav">
        
          <li  className="nav-item"><Link to="/"  className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/customerregistration" className="nav-link">Customer Registration</Link></li>
          <li className="dropdown">
            <Link  className="nav-link" >login</Link>
            <div className="dropdown-content" >
              <Link to="/customerlogin" className="nav-link">Customer Login</Link>
              <Link to="/sellerlogin" className="nav-link">Seller Login</Link>
              <Link to="/adminlogin" className="nav-link">Admin Login</Link>
            </div>
          </li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
        </nav>
    
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/about" element={<About/>} exact />
        <Route path="/customerregistration" element={<CustomerSignIn/>} exact />
        <Route path="/customerlogin" element={<CustomerLogin onCustomerLogin={onCustomerLogin}/> }exact/>
        <Route path="/sellerregistration" element={<SellerSignIn/> }exact/>
        <Route path="/sellerlogin" element={<SellerLogin onSellerLogin={onSellerLogin}/> }exact/>
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/> }exact/>
        <Route path="/contact" element={<Contact/>} exact />
        {/* <Route path="*" element={<PageNotFound/>} exact /> */}
      </Routes>
      
    </div>
  );
}
