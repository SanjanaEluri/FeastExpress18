// Ordereditems.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Ordereditems() {
  const [sellerData, setSellerData] = useState("");
  const [orderedItems, setOrderedItems] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const storedsellerData = localStorage.getItem('seller');
    //console.log(storedsellerData);
    if (storedsellerData) {
      const parsedsellerData = JSON.parse(storedsellerData);
      setSellerData(parsedsellerData);
    }
  }, []);

  useEffect(() => {
    if (sellerData && sellerData.email) {
      fetchOrderedItems();
    }
  }, [sellerData]);

  const fetchOrderedItems = async () => {
    try {
      if (!sellerData || !sellerData.itemname) {
        return; // Exit if sellerData or itemname is missing
      }
  
      const response = await axios.get(`http://localhost:2001/ordereditem/${sellerData.itemname}`);
      setOrderedItems(response.data);
    } catch (error) {
      setError(error.message);
    }
  };
  

  return (
    <div>
      <h2>Ordered Items</h2>
      {error && <p>Error: {error}</p>}
      <ul>
        {orderedItems.map((item, index) => (
          <li key={index}>
            {item.itemname} - Rs: {item.price}/-
          </li>
        ))}
      </ul>
    </div>
  );
}
