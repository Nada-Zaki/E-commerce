import React, { Fragment, useEffect, useState } from 'react';
import classes from './ProductData.module.css';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../store/products-actions';
import { FaStar } from 'react-icons/fa';
import { cartActions } from '../../store/cart-reducer';
import { wishlistActions } from '../../store/wishlist-reducer';
import LoadingSpinner from '../UI/LoadingSpinner';
import Card from '../UI/Card';



const ProductData = () => {
  const param = useParams();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const {product, productLoading} = useSelector(state => state.products);
  const [quantity, setQuantity] = useState(1);

  const token = localStorage.getItem('token');
  const price = `$${product.price?.toFixed(2)}`;

  useEffect(() => {
    dispatch(fetchSingleProduct(param.productId));
  }, [dispatch, param])

  
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    item = {...item,quantity: +quantity};
    dispatch(cartActions.addItemToCart(item));
  }

  const handleAddToList = () => {
    token ? dispatch(wishlistActions.addItemToList(product)) : 
    history.replace({pathname:'/login',state: { 
      from: location.pathname
    }})
  }
  
  return (
    <section className={classes.details}>
    { productLoading ? <LoadingSpinner /> :
      Object.keys(product).length !== 0 ? 
      <Fragment>
      <Card className={classes.image}>
        <img src={product.image} alt="product_img" loading="lazy"/> 
      </Card>
      <div className={classes.data}>
        <div className={classes.title}>
          <h2>{product.title}</h2>
          <div className={classes.rating}>
          <p>
          <span className={classes.rate}>{product.rating.rate}</span>
          <span className={classes["star-icon"]}><FaStar/></span> 
          </p>
          {product.rating.count} ratings
        </div>
        </div>
        <span className={classes.stock}>In Stock</span>
        <p className={classes.description}>{product.description}</p>
        <p className={classes.price}>{price}</p>
        <form className={classes["quantity-form"]} onSubmit={(e)=>handleAddToCart(e,product)}>
          <div className={classes.input}>
            <label htmlFor="quantity">Quantity</label>
            <input id="quantity" type="number" value={quantity} onChange={handleQuantityChange}/>
          </div>
          <div className={classes["btn-container"]}>
            <button className="btn" type='submit'>Add To Cart</button>
          </div>
        </form>
        <div className={classes["btn-container"]}>
          <button className="btn" onClick={handleAddToList}>Add To Wishlist</button>
        </div>
      </div>
      </Fragment> : ""}
    </section>
  )
}

export default ProductData