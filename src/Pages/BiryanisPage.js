import React from 'react';
import { Navbar } from 'react-bootstrap';
// import Pizza from '../components/Pizza';
// import pizzas from '../pizzasdata';
import biryanis from '../Biryanisdata';
import Biryanis from '../components/Biryanis';
import '../components/NavBar'

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
