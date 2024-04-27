import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
export default function Shakes() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:2001/viewmenu');
      const filteredItems = response.data.filter(item => item.category === 'Shakes');
      setItems(filteredItems);
    } catch (error) {
      console.error(error.message);
    }
  };

  

  const addtocart = async (itemname, category) => {
    try {
      const response = await axios.post('http://localhost:2001/addtocart', { itemname, category});
      if (response.status >= 200 && response.status < 300) {
        fetchItems(); // Refresh items after adding to cart
        setMessage(response.data); // Set success message
        setError('');
      } else {
        setError('Failed to add item to cart');
        setMessage('');
      }
    }  catch (error) {
      console.error('Error adding item to cart:', error.message);
      setError('Failed to add item to cart');
      setMessage('');
    }
  };

  useEffect(() => {
    fetchItems();
  }, []); // Run only once on component mount

  const cardStyle = {
    width: '200px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  };

  const hoverStyle = {
    transform: 'scale(1.05)',
  };

  return (
    <div>
      <h2><b><u>YOUR MENU</u></b></h2>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {items.map((menuItem, index) => (
          <div
            key={index}
            style={{ ...cardStyle, ...(menuItem.isHovered ? hoverStyle : {}) }}
            onMouseEnter={() => setItems(prevItems => prevItems.map((item, i) => (i === index ? { ...item, isHovered: true } : item)))}
            onMouseLeave={() => setItems(prevItems => prevItems.map((item, i) => (i === index ? { ...item, isHovered: false } : item)))}
          >
            {menuItem.image && (
              <img
                src={`data:${menuItem.image.contentType};base64,${menuItem.image.data}`}
                alt=""
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
            )}
            <div style={{ padding: '10px' }}>
              <h4>{menuItem.itemname}</h4>
              <p>Price: Rs:{menuItem.price}/-</p>
              <p>Quantity: {menuItem.quantity}</p>
              <p>Variant: {menuItem.variant}</p>
              <p>Category: {menuItem.category}</p>
              
              <button onClick={() => addtocart(menuItem.itemname, menuItem.category)}>AddToCart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
