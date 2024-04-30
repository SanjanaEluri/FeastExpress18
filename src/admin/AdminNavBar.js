import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Registration from '../Sellermenu/RegistrationMenu';
import Viewsellers from './Viewsellers';
import AdminHome from './AdminHome';
import ViewMenu from './ViewMenu';
import AdminLogin from './AdminLogin';


export default function AdminNavBar() {

const navigate=useNavigate();
const handlelogout=()=>{
  localStorage.removeItem('isAdminLoggedIn');
  localStorage.removeItem('admin')
  navigate('/login');
  window.location.reload()
};


  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <Link to="/" className="navbar-brand" style={{ fontSize: '50px' ,color:'#ea7f05'}}>
          FeastExpress
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/Adminhome" className="nav-link" style={{ color:'#ea7f05' }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" style={{ color: "white" }}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/addmenu" className="nav-link" style={{ color: "white" }}>
              addmenu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/viewmenu" className="nav-link" style={{ color: "white" }}>
              View menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/viewseller" className="nav-link" style={{ color: "white" }}>
              View Sellers
            </Link>
          </li>


          <li className="nav-item">
            <Link to="logout" className="nav-link" onClick={handlelogout}   style={{ color: "white" }}>
             logout
            </Link>
          </li>

        </ul>
      </nav>

      <Routes>
        <Route path="/Adminhome" element={<AdminHome />} />
        <Route path="/login" element={<AdminLogin/>} />
        <Route path="/addmenu" element={<Registration />} />
        <Route path="/viewmenu" element={<ViewMenu />} />
        <Route path="/viewseller" element={<Viewsellers />} />
      </Routes>
    </div>
  );
}