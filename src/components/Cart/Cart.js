import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart);
    let cart = props.cart;
    let total = 0;
    
    for(let i=0; i< cart.length; i++){
        const employee = cart[i];
        total = total + employee.sellary;
    }

    return (
        <div className="cart"> 
            <h2>Cart</h2>
            <h4>Employee added: {cart.length} </h4>
            <h3>Sellary: {total}</h3>
        </div>
    );
};

export default Cart;