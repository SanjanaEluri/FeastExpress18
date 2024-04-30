import React from 'react';
import { Navbar } from 'react-bootstrap';
import shakes from '../Shakesdata'
import Shakes from '../components/Shakes'

export default function Shakespage() {
    return (
        <div>
            <div className='row'>
                {shakes.map(Shake => (
                    <div className='col-md-4' key={Shake.name}>
                        <div>
                            <Navbar />
                         <Shakes Shake={Shake}/> {/* Correct prop name */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
