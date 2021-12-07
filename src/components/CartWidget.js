import React from 'react';
import { CardImg } from 'react-bootstrap';
import logo from '../carta.png';
//import './cart.css'


const CartWidget= () => {
    return (
        <div>
            <img className="logo" src={logo} alt="logo"/>
        </div>
       
    )
}

export default CartWidget;
