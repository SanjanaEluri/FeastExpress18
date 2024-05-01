import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="about">
      <h2 style={{color:"orange"}}>About Our Food Ordering System</h2>
      <h3>Welcome to our food ordering system! We are dedicated to providing you with a convenient and delicious way to order food from your favorite restaurants.</h3>
      <h5>Our system allows you to browse menus, place orders, and track deliveries all in one place. Whether you're craving pizza, sushi, or something sweet, we've got you covered.</h5>
      <h5>Thank you for choosing our food ordering system. We hope you enjoy your meal!</h5>
      
     
      <p style={{color:"red"}} className="signature">- FeastExpress</p>
    </div>
  );
}
