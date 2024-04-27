import React from 'react';
import { Navbar } from 'react-bootstrap';
// import Pizza from '../components/Pizza';
// import pizzas from '../pizzasdata';
import biryanis from '../Biryanisdata';
import Biryanis from '../components/Biryanis';
import '../components/NavBar'

import Cart from '../components/Cart';
import Login from '../components/Login';
import config from '../config';
export default function BiryanisPage() {
    return (
        <div>
            <div className='row'>
                {biryanis.map(Biryani => (
                    <div className='col-md-4 ' key={Biryani.name}>
                        <div >
                          <Navbar/>
                        <Biryanis Biryani={Biryani} />
                       
                    
                        
                
                        </div>
                        
                    </div>
                ))}
            </div>
           
        </div>
    );
}
