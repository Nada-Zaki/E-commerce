import React from 'react';
import classes from './CartSummary.module.css';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const CartSummary = () => {
    const location = useLocation();

    let {subTotal, totalQuantity} = useSelector(state => state.cart);
    const token = localStorage.getItem('token');

    subTotal = `$${subTotal?.toFixed(2)}`;
    
    return (
        <div className={classes.summary}>
            <h3>Order Summary</h3>
            <div className={classes["summary-data"]}>
                <p>Subtotal ({`${totalQuantity} ${totalQuantity===1 ? "item" : "items"}`})</p>  
                <p>{subTotal}</p> 
                <p>Shipping Details</p>
                <span>free</span>
                
                <strong>Total</strong>
                <strong>{subTotal}</strong>
            </div>
            <Link to={token ? '/checkout' : {pathname:'/login', state:{from:location.pathname}}} className={`btn ${classes["checkout-btn"]}`}>Checkout</Link> 
        </div>
  )
}

export default CartSummary