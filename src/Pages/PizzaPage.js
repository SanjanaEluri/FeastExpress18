import React from 'react'
import config from '../config';
export default function PizzaPage({foodImages}) {
  return (
    <div>
        <img src={foodImages.image} className='img-fluid' alt={foodImages.name} style={{ height: "200px", width: "200px" }} />
           </div>

  )
}
