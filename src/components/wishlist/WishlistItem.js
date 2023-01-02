import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './WishlistItem.module.css';
import { cartActions } from '../../store/cart-reducer';
import { wishlistActions } from '../../store/wishlist-reducer';
import { useDispatch } from 'react-redux';
import Card from '../UI/Card';

const WishlistItem = ({item}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const price = `$${item.price?.toFixed(2)}`;

  const showDetails = () => {
    history.push(`/productDetails/${item.id}`);
  }

  const handleAddToCart = () => {
    dispatch(cartActions.addItemToCart({...item,quantity:1}));
  }

  const handleRemoveFromList = () => {
    dispatch(wishlistActions.removeItemFromList(item.id));
  }

  return (
    <Card className={classes["wishlist-item"]} >
      <img src={item.image} alt="wishlist item" loading="lazy" onClick={showDetails} />
      <h3>{item.title}</h3>
      <p className={classes.price}>{price}</p>
      <button className='btn' onClick={handleAddToCart}>Add To Cart</button>
      <button className='btn remove-btn' onClick={handleRemoveFromList}>Remove From List</button>
    </Card>
  )
}

export default WishlistItem