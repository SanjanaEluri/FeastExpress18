import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Cart() {
  const [orderedItems, setOrderedItems] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const storedJobSeekerData = localStorage.getItem('customer');
    if (storedJobSeekerData) {
      const parsedJobSeekerData = JSON.parse(storedJobSeekerData);
      setOrderedItems(parsedJobSeekerData);
    }
  }, []);
  useEffect(() => {
    const fetchOrderedItems = async () => {
      try {
        const response = await axios.get(`http://localhost:2001/ordereditem/${orderedItems.email}`);
        setOrderedItems(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchOrderedItems();
  });

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
