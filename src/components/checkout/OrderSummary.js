import React from 'react';
import classes from './OrderSummary.module.css';

const OrderSummary = ({items,total}) => {
    return (
        <div className={classes["order-summary"]}>
            <h2>Order Summary</h2>
            {items.map(item => 
                <div key={item.id} className={classes.item}>
                    <img src={item.image} alt="product" loading="lazy" />
                    <h3>{item.title} <br /> <span className={classes.quantity}>Quantity: {item.quantity}</span></h3>
                    <p className={classes.price}>{`$${item.price?.toFixed(2)}`}</p>
                </div>
            )}
            <strong>Total <br/> {total}</strong>
        </div>
    )
}

export default OrderSummary