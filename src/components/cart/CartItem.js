import React, { useState } from 'react';
import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-reducer';

const CartItem = ({item}) => {
    const [quantity, setQuantity] = useState();
    const dispatch = useDispatch();

    const price = `$${item.price?.toFixed(2)}`;

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }
    
    const handleAddToCart = (e, item) => {
        e.preventDefault();
        item = {...item, quantity: +quantity}
        dispatch(cartActions.addItemToCart(item));
    }

    const handleRemoveFromCart = (e,item) => {
    dispatch(cartActions.removeItemFromCart(item));
    }

    return (
        <div className={classes["cart-item"]} key={item.id}>
            <div className={classes.image}>
                <img src={item.image} alt="product_img" loading="lazy" />
            </div>
            <div className={classes.data}>
                <h3>{item.title}</h3>
                <span>In Stock</span>
                <p className={classes.price}>{price}</p>
                <form onSubmit={(e)=>handleAddToCart(e,item)}>
                    <div className={classes.form}>
                        <div className={classes.input}>
                            <label htmlFor="quantity">Quantity</label>
                            <input id="quantity" type="number" defaultValue={item.quantity} onChange={handleQuantityChange}/>
                        </div>
                        <button className="btn" type="submit">Update</button>
                        <button className="btn remove-btn" onClick={(e)=>handleRemoveFromCart(e,item)}>Remove</button>
                    </div>
                </form>                   
            </div>
        </div>
    )
}

export default CartItem