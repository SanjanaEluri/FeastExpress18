import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nonvegsoups from '../components/NonVegSoups';
import nonvegsoups from '../NonVegSoupsdata';

export default function NonVegSoupsPage() {
    return (
        <div>
            <div className='row'>
                {nonvegsoups.map(nonvegsoup=> (
                    <div className='col-md-4' key={nonvegsoup.name}>
                        <div>
                            <Navbar/>
                            <Nonvegsoups nonvegsoup={nonvegsoup}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
