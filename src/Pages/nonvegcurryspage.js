import React from 'react';
import { Navbar } from 'react-bootstrap';
import nonvegcurrys from '../Nonvegcurrysdata'
import Nonvegcurrys from '../components/Nonvegcurrys'
import config from '../config';

export default function nonvegcurryspage() {
    return (
        <div>
            <div className='row'>
                {nonvegcurrys.map(Nonvegcurry => (
                    <div className='col-md-4' key={Nonvegcurry.name}>
                        <div>
                            <Navbar />
                          <Nonvegcurrys Nonvegcurry={Nonvegcurry}/> {/* Correct prop name */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
