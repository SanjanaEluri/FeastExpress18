import React, { useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap';
import './Cart';
import Login from './Login';
import Homepage from '../Pages/Pizzaspage';
import Cart from './Cart';
import MainPage from '../Pages/MainPage';
import Registration from '../Sellermenu/RegistrationMenu';
import BiryanisPage from '../Pages/BiryanisPage';
import Signin from './Signin';
import Tiffinspage from '../Pages/Tiffinspage';
import NonVegSoupsPage from '../Pages/NonVegSoupsPage';
import VegSoupsPage from '../Pages/VegSoupsPage';
import Vegcurrys from '../Pages/vegcurryspage';
import Nonvegcurrys from '../Pages/nonvegcurryspage'
import Shakes from '../Pages/Shakespage'
import Cakes from '../Pages/Cakespage'
import config from '../config';

import CustomerProfile from './CustomerProfile';
export default function NavBar() {
  const navigate=useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem('isCustomerLoggedIn');
    localStorage.removeItem('customer')
    navigate('/');
    window.location.reload()
  };
  




  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here, e.g., navigate to search results page
    console.log(searchTerm);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <Link to="/" className="navbar-brand" style={{ fontSize: '50px' }}>
          FeastExpress
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ fontSize: '30px', color:'#ea7f05' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/offers" className="nav-link" style={{ fontSize: '30px', color:'#ea7f05'}}>
                offers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link" style={{ fontSize: '30px',color:'#ea7f05' }}>
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" style={{ fontSize: '30px',color:'#ea7f05' }}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link" style={{ fontSize: '30px',color:'#ea7f05' }}>
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CustomerProfile" className="nav-link" style={{ fontSize: '30px',color:'#ea7f05' }}>
                profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="logout" className="nav-link" onClick={handlelogout} style={{ fontSize: '30px',color:"#ea7f05" }}>
                logout
              </Link>
            </li>
          </ul>
          {/* <Form inline onSubmit={handleSearch}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form> */}

<Form inline onSubmit={handleSearch} className="ml-auto">
  <FormControl
    type="text"
    placeholder="Search"
    className="mr-sm-2"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <Button variant="outline-success" type="submit">
    Search
  </Button>
</Form>

        </div>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} exact></Route>
        <Route path="/offers" element={<Homepage />} exact></Route>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/cart" element={<Cart/>} exact></Route>
        <Route path="/registermenu" element={<Registration />} exact></Route>
        <Route path="/signin" element={<Signin />} exact></Route>
        <Route path="/biryanis" element={<BiryanisPage />} exact></Route>
        <Route path="/tiffins" element={<Tiffinspage />} exact></Route>
        <Route path="/non-veg-soups" element={<NonVegSoupsPage/>} exact></Route>
        <Route path="/veg-soups" element={<VegSoupsPage/>} exact></Route>
        <Route path="/vegcurrys" element={<Vegcurrys/>} exact ></Route>
        <Route path="/nonvegcurrys" element={<Nonvegcurrys/>} exact ></Route>
        <Route path="/shakes" element={<Shakes/>} exact ></Route>
        <Route path="/cakes" element={<Cakes/>} exact ></Route>
        <Route path="/CustomerProfile" element={<CustomerProfile/>} exact ></Route>

      </Routes>
    </div>
  );
}
