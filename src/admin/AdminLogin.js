import React, { useState } from 'react';
import './admin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config'

export default function AdminLogin({onAdminLogin}) 
{
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/checkadminlogin`, formData);
      if (response.data!=null) 
      {
        onAdminLogin();
        localStorage.setItem('admin',JSON.stringify(response.data));
        navigate("/Adminhome")
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div>
      <h3 align="center"><u>Admin Login</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}