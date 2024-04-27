import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationMenu.css';

export default function Registration() {
  const [formData, setFormData] = useState({
    itemname: '',
    email:'',
    price: '',
    
    quantity: 1, // Set default quantity to 1
    varient:'',
    category:'',
    image: null,
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');



   const handleChange = (e) => {

    if (e.target.type === 'file') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
     setFormData({ ...formData, [e.target.id]: e.target.value });
    }
   };

  // const handleChange = (e) => {
  //   const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
  //   setFormData({ ...formData, [e.target.id]: value });
  //   console.log(formData.category)
  // };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('itemname', formData.itemname);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('price', formData.price);
      
      formDataToSend.append('quantity', formData.quantity);
      formDataToSend.append('varient', formData.varient);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('image', formData.image);
      

      const response = await axios.post('http://localhost:2001/insertmenu', formDataToSend);

      if (response.status === 200) {
        setFormData({ // Clear itemid and reset other fields on success
          itemname: '',
          email:'',
          price: '',
          
          quantity: 1, // Reset quantity to default
          varient:'',
          category: '',
          image: null,

        });
        setMessage(response.data); // Assuming response.data contains a success message
      }

      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div className='card'>
      <h3 align="center"><u><b>Seller Menu Registration</b></u></h3>
      {message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>}

      <form onSubmit={handleSubmit}>

        <div>
          <label>Item Name</label>
          <input type="text" id="itemname" value={formData.itemname} onChange={handleChange} required />
        </div>

        <div>
          <label>Email ID</label>
          <input type="text" id="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <label>Price</label>
          <input type="number" id="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div>
          <label>Quantity</label>
          <input type="number" id="quantity" value={formData.quantity} onChange={handleChange} required />
        </div>

        <div className='side-by-side'>
          <label>Varient</label>&nbsp;&nbsp;
          <select id="varient" value={formData.varient} onChange={handleChange} required>
            <option value="">Select Varient</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="Family-Pack">Large</option>
            <option value="Function-Pack">Function-Pack</option>
          </select>
        </div>

        &nbsp;&nbsp;

        <div className='side-by-side'>
          <label>category</label>&nbsp;&nbsp;
          <select id="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            {/* <option value="Tiffins">Tiffins</option>
            <option value="biryani">biryani</option>
            <option value="pizzas">Pizzas</option>
            <option value="Non-veg Soups">Non-veg Soups</option>
            <option value="Veg Soups">Veg Soups</option>
            <option value="Veg Currys">Veg Currys</option>
            <option value="Non-Veg Currys">Non-Veg Currys</option> */}
            <option value="Shakes">Shakes</option>
            <option value="Cakes">Cakes</option>
          </select>
        </div>
        &nbsp;&nbsp;
        
        <div className='side-by-side'>
          <label>Upload Image</label>
          <input type="file" id="image" onChange={handleChange} accept="image/*" required />
        </div>

        <button type="submit">Add To Menu</button>
      </form>
    </div>
  );
}