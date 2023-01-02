import React, { Fragment, useEffect, useState } from 'react'
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import classes from './MainHeader.module.css'
import { FaShoppingCart, FaHeart, FaUser , FaBars, FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/products-actions';
import { Link } from 'react-router-dom';
import { logout } from '../../store/auth-actions';


const MainHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const {categories} = useSelector(state => state.products);
  const cartTotalQuantity = useSelector(state => state.cart.totalQuantity); 
  const wishlistTotalQuantity = useSelector(state => state.wishlist.totalQuantity); 
  const token = localStorage.getItem('token');

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const target = (location.state && location.state.from) || location.pathname;
 

  const handleMobileNav = () => {
    setIsMobile(true);
  }

  const handleCloseNav = () => {
    setIsMobile(false);
  }

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  const toggleDropdown = () => {
    setShowDropdown(prevState => !prevState);
  }

  const loginHandler = () => {
    setShowDropdown(false);
    history.replace({pathname:'/login', state:{from:location.pathname}});
  }

  const logoutHandler = () => {
    dispatch(logout());
    setShowDropdown(false);
    history.replace(target);
  }

  return (
    <Fragment>
      {categories.length>0 && <header className={classes.header}>
          <h1 className={classes.logo}><Link to={"/products"}>Nada</Link></h1>
          <nav className={classes.nav} >            
              <ul className={isMobile ? classes["mobile-nav"] : ""} >
                  {categories.map(item => 
                    <li key={Math.random()}><NavLink activeClassName={classes.active} onClick={handleCloseNav} to={`/products/category/${item}`}>{item}</NavLink></li>)}
                  <button className={`${classes.icon} ${classes["close-nav"]}`} onClick={handleCloseNav}>
                    <FaTimes  />
                  </button>
              </ul>
          </nav>
          <div className={classes.icons}>
            <div className={classes.dropdown}>
              <FaUser className={classes.icon} onClick={toggleDropdown} />
              {showDropdown && <button className={classes["dropdown-content"]} onClick={token ? logoutHandler : loginHandler}>{token ? "Logout" : "Login"}</button>} 
            </div>
            {token && <div className={classes["icon-container"]}>
              <Link to="/wishlist"><FaHeart className={classes.icon} /></Link>
              <p className={classes.badge}>{wishlistTotalQuantity}</p>
            </div>}
            <div className={classes["icon-container"]}>     
              <Link to="/cart"><FaShoppingCart className={classes.icon} /></Link>
              <p className={classes.badge}>{cartTotalQuantity}</p>
            </div>  
            <button className={`${classes.icon} ${classes["nav-icon"]}`} onClick={handleMobileNav}>
              <FaBars />
            </button>
          </div>
      </header>}
    </Fragment>
  )
}

export default MainHeader