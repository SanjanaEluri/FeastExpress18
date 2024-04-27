import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Homepage from './Pizzaspage';
import Viewmenu from '../Sellermenu/Viewmenu';
import foodImages from './FoodImages';
import './images.css';

import transparentVideo from '../Images/pexels_videos_2832316 (1080p).mp4'; // Import your transparent video file
import Viewmenud from './Viewmenud';
import config from '../config';
export default function MainPage() {
  const navigate = useNavigate();

  const handleImageClick = (type) => {
    if (type === 'biryani') {
      navigate('/biryanis');
    } else if (type === 'pizzas') {
      navigate('/offers');
    } else if (type === 'Tiffins') {
      navigate('/tiffins');
    } else if (type === 'Non-veg Soups') {
      navigate('/non-veg-soups'); // Corrected route name
    }
    else if (type === 'Veg Soups') {
      navigate('/veg-soups'); // Corrected route name
    }
    else if (type === 'Veg Currys') {
      navigate('/vegcurrys'); // Corrected route name
    }
    else if (type === 'Non-Veg Currys') {
      navigate('/nonvegcurrys'); // Corrected route name
    }
    else if (type === 'Shakes') {
      navigate('/shakes'); // Corrected route name
    }
    else if (type === 'cakes') {
      navigate('/cakes'); // Corrected route name
    }
   
   
  };

  return (
    <Container>
      <Row>
        <div className='image-container'>
          {foodImages.map((foodImage, index) => (
            <div key={index} onClick={() => handleImageClick(foodImage.type)}>
              <div className='circular-image'>
                {foodImage.image}
              </div>
              <h1>{foodImage.type}</h1>
            </div>
          ))}
        </div>
      </Row>
      <Row>
        <Viewmenud />
      </Row>
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
          //backgroundColor:'white'
        }}
      >
        <source src={transparentVideo} type='video/webm' />
        Your browser does not support the video tag.
      </video>
    </Container>
  );
}
