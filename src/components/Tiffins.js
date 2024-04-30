import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function Tiffins({ Tiffin }) {
    const [quantity, setQuantity] = useState(1);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   

    const addToCart = () => {
        

        const newItem = {
            name: Tiffin.name,
            variant: Tiffin.variant,
            quantity: quantity,
            price: Tiffin.prices && Tiffin.prices[Tiffin.variant] ? Tiffin.prices[Tiffin.variant] * quantity : 0,
        };

        

        // Update the cartItems state variable in the Cart component
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        localStorage.setItem('cartItems', JSON.stringify([...cartItems, newItem]));
    };

   

    return (
        <div style={{ margin: "50px", height: "500px" }} className='shadow-lg p-3 mb-9 bg-white rounded'>
            <div onClick={handleShow} style={{ cursor: 'pointer' }}>
                <h1>{Tiffin.name}</h1>
                <img src={Tiffin.image} className='img-fluid' alt={Tiffin.name} style={{ height: "200px", width: "200px" }} />
            </div>
            <div className='w-100 m-1'>
                <div className='flex-container'>
                    <div className='m-1 w-50'>
                        <h3>Price: {Tiffin.prices && Tiffin.prices[Tiffin.variant] ? Tiffin.prices[Tiffin.variant] * quantity : 0} Rs/-</h3>
                    </div>
                    <div className='m-1 w-50'>
                        <p style={{ fontSize: "30px" }}>Quantity</p>
                        <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} style={{ fontSize: "30px" }}>
                            {[...Array(10).keys()].map((_, i) => (
                                <option key={i} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <div className='m-1 w-50'>
                            <button className='btn' style={{width:"100%"}} onClick={addToCart}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{Tiffin.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={Tiffin.image} className='img-fluid' alt='here' style={{ height: "400px" }} />
                    <p style={{ fontSize: "30px" }}>{Tiffin.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}