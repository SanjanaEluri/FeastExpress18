import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainNavBar from './main/MainNavBar';
import AdminNavBar from './admin/AdminNavBar';
import MainPage from './Pages/MainPage';
import SellerNavBar from './Sellermenu/Scomponents/SellersNavBar';
import NavBar from './components/NavBar'
import { Nav } from 'react-bootstrap';
import config from './config';
export default function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false);
  const [isSellerLoggedIn, setIsSellerLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    const customerLoggedIn = localStorage.getItem('isCustomerLoggedIn') === 'true';
    const sellerLoggedIn = localStorage.getItem('isSellerLoggedIn') === 'true';

    setIsAdminLoggedIn(adminLoggedIn);
    setIsCustomerLoggedIn(customerLoggedIn);
    setIsSellerLoggedIn(sellerLoggedIn);
  }, []);

  const onAdminLogin = () => {
    localStorage.setItem('isAdminLoggedIn', 'true');
    setIsAdminLoggedIn(true);
  };

  // const onCustomerLogin = () => {
  //   localStorage.setItem('isCustomerLoggedIn', 'true');
  //   setIsCustomerLoggedIn(true);
  // };

  const onCustomerLogin = () => {
    localStorage.setItem('isCustomerLoggedIn', 'true');
    setIsCustomerLoggedIn(true);
    console.log('Customer logged in');
  };
  

  const onSellerLogin = () => {
    localStorage.setItem('isSellerLoggedIn', 'true');
    setIsSellerLoggedIn(true);
  };

  return (
    <div className="App">
      
      <Router>
        {isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isCustomerLoggedIn ? (
          <NavBar/>
        ) : isSellerLoggedIn ? (
          <SellerNavBar />
        ) : (
          <MainNavBar
            onAdminLogin={onAdminLogin}
            onCustomerLogin={onCustomerLogin}
            onSellerLogin={onSellerLogin}
          />
        )}
      </Router>
    </div>
  );
}
