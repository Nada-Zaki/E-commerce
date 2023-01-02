import React from 'react';
import classes from './Cart.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../../components/cart/CartItem';
import CartSummary from '../../components/cart/CartSummary';


const Cart = () => {
    const {items} = useSelector(state => state.cart);
    
    if(items.length === 0) {
        return <section className={`${classes["empty-cart"]} centered`}>
            <h2>Your Cart Is Empty</h2>
            <Link to="/" className='btn'>Start Shopping</Link>
        </section>
    }

    return (
        <section className={classes.cart}>
            <div className={classes["items-container"]}>
                <h2>Shopping Cart</h2>
                <hr/>
                {items.map(item => 
                <CartItem item={item} key={item.id} />
                )}
            </div>
            <CartSummary />
        </section>
    )
}

export default Cart