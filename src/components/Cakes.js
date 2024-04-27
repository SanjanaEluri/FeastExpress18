import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import config from '../config'
export default function Cakes({ Cake }) {
    const [quantity, setQuantity] = useState(1);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    return (
        <div style={{ margin: "50px", height: "500px" }} className='shadow-lg p-3 mb-9 bg-white rounded'>
            <div onClick={handleShow} style={{ cursor: 'pointer' }}>
                <h1>{Cake.name}</h1>
                <img src={Cake.image} className='img-fluid' alt={Cake.name} style={{ height: "200px", width: "200px" }} />
            </div>
            <div className='w-100 m-1'>
                <div className='flex-container'>
                    <div className='m-1 w-50'>
                        <h3>Price: {Cake.prices * quantity} Rs/-</h3>
                    </div>
                    <div className='m-1 w-50'>
                        <p style={{ fontSize: "30px" }}>Quantity</p>
                        <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} style={{ fontSize: "30px" }}>
                            {[...Array(10).keys()].map((_, i) => (
                                <option key={i} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <div className='m-1 w-50'>
                            <button className='btn' style={{width:"100%"}}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{Cake.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={Cake.image} className='img-fluid' style={{ height: "400px" }} />
                    <p style={{ fontSize: "30px" }}>{Cake.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
