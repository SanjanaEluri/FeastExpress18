import React from 'react';
import { Navbar } from 'react-bootstrap';
import cakes from '../Cakesdata'
import Cakes from '../components/Cakes'


export default function Cakespage() {
    return (
        <div>
            <div className='row'>
                {cakes.map(Cake=> (
                    <div className='col-md-4' key={Cake.name}>
                        <div>
                            <Navbar/>
                            <Cakes Cake={Cake}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

