import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';

export default function Biryanis({ Biryani }) {
    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState('small');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const addcart = () => {
        // Perform any cart-related actions here
        const cart = localStorage.getItem('cart');
        let parsedCart = [];
        if (cart) {
            parsedCart = JSON.parse(cart);
        }
        const newCart = parsedCart.concat({ ...Biryani, quantity, varient });
        localStorage.setItem('cart', JSON.stringify(newCart));
        navigate('/cart');
      };
    return (
        <div style={{ margin: "50px" }} className='shadow-lg p-3 mb-9 bg-white rounded'>
            <div onClick={handleShow} style={{ cursor: 'pointer' }}>
                <h1>{Biryani.name}</h1>
                <img src={Biryani.image} className='img-fluid' alt={Biryani.name} style={{ height: "200px", width: "200px" }} />
            </div>

            <div className="flex-container">
                <div className='w-100 m-1'>
                    <p style={{ fontSize: "30px" }}>Varients</p>
                    <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }} style={{ fontSize: "30px" }}>
                        {Biryani.varients.map(varient => (
                            <option key={varient} value={varient} style={{ fontSize: "30px" }}>{varient}</option>
                        ))}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p style={{ fontSize: "30px" }}>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} style={{ fontSize: "30px" }}>
                        {[...Array(10).keys()].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                    <div className="flex-container">
                        <div className='m-1 w-30'>
                            <h1 className='mt-1'>Price: {Biryani.prices[0][varient] * quantity} Rs/-</h1>
                        </div>
                        <div className='m-1 w-30'>
                            <button className='btn' style={{width:"100%"}} onClick={() => addcart()}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{Biryani.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={Biryani.image} className='img-fluid' alt="here" style={{ height: "400px" }} />
                    <p style={{ fontSize: "30px" }}>{Biryani.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
