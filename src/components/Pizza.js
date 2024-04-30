import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'; // Add this import

export default function Pizza({ pizza }) {
    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState('small');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ margin: "50px" }} className='shadow-lg p-3 mb-9 bg-white rounded'>
           <div onClick={handleShow} style={{ cursor: 'pointer' }}>
           <h1>{pizza.name}</h1>
            <img src={pizza.image} className='img-fluid' alt={pizza.name} style={{ height: "200px", width: "200px" }} />
           </div>

            <div className="flex-container">
                <div className='w-100 m-1'>
                    <p  style={{fontSize:"30px"}}>Varients</p>
                    <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }} style={{fontSize:"30px"}}>
                        {pizza.varients.map(varient => (
                            <option key={varient} value={varient} style={{fontSize:"30px"}}>{varient}</option>
                        ))}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p style={{fontSize:"30px"}}>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} style={{fontSize:"30px"}}>
                        {[...Array(10).keys()].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                    <div className="flex-container">
                        <div className='m-1 w-30'>
                            <h1 className='mt-1'>Price: {pizza.prices[0][varient] * quantity} Rs/-</h1>
                        </div>
                        <div className='m-1 w-30' >
                            <button className='btn' style={{width:"100%"}} onClick={handleShow}>ADD TO CART</button>
                        </div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{pizza.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <img src={pizza.image} className='img-fluid' alt='here' style={{height:"400px"}}/>
                                <p style={{fontSize:"30px"}}>{pizza.description}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className='btn' onClick={handleClose}>CLOSE</button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}