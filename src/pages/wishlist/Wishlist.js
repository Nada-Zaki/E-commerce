import React from 'react';
import classes from './Wishlist.module.css';
import { useSelector } from 'react-redux';
import WishlistItem from '../../components/wishlist/WishlistItem';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { items } = useSelector(state => state.wishlist);

  if(items.length === 0) {
    return <section className={`${classes["empty-list"]} centered`}>
        <h2>Your haven't added an item yet</h2>
        <Link to="/" className='btn'>Continue Shopping</Link>
    </section>
}

  return (
    <section className={classes.wishlist}>
        <h2>Wishlist</h2>
        <div className={classes.container}>
          {items.map(item => 
            <WishlistItem key={item.id} item={item} />)}
        </div>
    </section>
  )
}

export default Wishlist