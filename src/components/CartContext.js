import React, { createContext, useState } from 'react';
import config from '../config'
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza) => {
    setCartItems([...cartItems, pizza]); // Add pizza to cart
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
