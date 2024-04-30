import React from 'react';
import { Navbar } from 'react-bootstrap';
import vegcurrys from '../Vegcurrysdata';
import Vegcurrys from '../components/Vegcurrys';

export default function vegcurrysPage() {
    return (
        <div>
            <div className='row'>
                {vegcurrys.map(vegcurry => (
                    <div className='col-md-4' key={vegcurry.name}>
                        <div>
                            <Navbar />
                            <Vegcurrys vegcurrys={vegcurry} /> {/* Correct prop name */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
