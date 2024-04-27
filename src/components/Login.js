import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import transparentVideo from '../Images/pexels_videos_2832316 (1080p).mp4';
import config from '../config'
export default function Login({onCustomerLogin}) 
{
  const [formData, setFormData] = useState({
    email: '',
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
      const response = await axios.post(`${config.url}/checkcustomerlogin`, formData);
      if (response.data!=null) 
      {
        onCustomerLogin();
        localStorage.setItem('customer', JSON.stringify(response.data));
        console.log(response.data)
        navigate("/");
       
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
      <h3 align="center"><u>Hey! Login Here </u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Login</button>
      </form>

      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: -1000,
          opacity: 0.5, // Set the opacity for transparency
        }}
      >
        <source src={transparentVideo} type='video/webm' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}