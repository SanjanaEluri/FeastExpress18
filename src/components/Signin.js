import React, { useState } from 'react';
import axios from 'axios';
import './signin.css'
// import transparentVideo from '../Images/pexels_videos_2832316 (1080p).mp4';
// import config from '../config';
export default function Signin() 
{
  //formData state variable is initialized with all required keys and empty values
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    dateofbirth: '',
    email: '',
    password: '',
    location: '',
    contact: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    
    setFormData({...formData, [e.target.id]: e.target.value});
    
    // It updates the state `formData` by adding or updating a property with a key equal to 
    //the ID of the input field 
    //that triggered the change event (e.target.id). The value of this property is 
    //set to the new value entered in that input field (e.target.value).
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2001/insertcustomer', formData);
      if (response.status === 200) 
      {
        //It will set all fields to ""
        setFormData({
          fullname: '',
          gender: '',
          dateofbirth: '',
          email: '',
          password: '',
          location: '',
          contact: ''
        });
      }
      setMessage(response.data);
      setError(''); //set error to ""
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage(''); //set message to ""
    }
  };
  
  return (
    <div>
      <h3 align="center"><u>hello !  Sign In to explore the Taste</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="date" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div>
  <label>Contact</label>
  <input
    type="tel"
    id="contact"
    value={formData.contact}
    onChange={handleChange}
    required
    pattern="[6-9]{1}[0-9]{9}"
    title="Please enter a 10-digit number"
  />
</div>

        <button type="submit">Register</button>
      </form>

      {/* <video
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
      </video> */}
    </div>
  );
}