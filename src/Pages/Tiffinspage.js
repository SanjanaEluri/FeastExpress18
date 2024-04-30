import React from 'react'
import '../components/NavBar'
import { Navbar } from 'react-bootstrap';
import tiffins from '../tiffinsdata'
import Tiffins from '../components/Tiffins'

export default function Tiffinspage() {
    return (
        <div>
            <div className='row'>
                {tiffins.map(Tiffin=> (
                    <div className='col-md-4 ' key={Tiffin.name}>
                        <div >
                          <Navbar/>
                        <Tiffins Tiffin={Tiffin} />
                       
                    
                        
                
                        </div>
                        
                    </div>
                ))}
            </div>
           
        </div>
    );
}
