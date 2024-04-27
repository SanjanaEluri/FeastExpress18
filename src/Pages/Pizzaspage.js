import React from 'react';
import Pizza from '../components/Pizza';
import pizzas from '../pizzasdata';

import '../components/NavBar'
import { Navbar } from 'react-bootstrap';
import Cart from '../components/Cart';
import Login from '../components/Login';
import Biryanis from '../components/Biryanis';
import config from '../config';
export default function Homepage() {
    return (
        <div>
            <div className='row'>
                {pizzas.map(pizza => (
                    <div className='col-md-4 ' key={pizza.name}>
                        <div >
                          <Navbar/>
                        <Pizza pizza={pizza} />
                       
                 </div>
                </div>
                ))}
            </div>
           
        </div>
    );
}
