import React from 'react';
import { Navbar } from 'react-bootstrap';
import vegsoups from '../Vegsoupsdata'
import Vegsoups from '../components/Vegsoups'


export default function VegSoupsPage() {
    return (
        <div>
            <div className='row'>
                {vegsoups.map(vegsoup=> (
                    <div className='col-md-4' key={vegsoup.name}>
                        <div>
                            <Navbar/>
                            <Vegsoups vegsoup={vegsoup}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
