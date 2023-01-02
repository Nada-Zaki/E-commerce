import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import classes from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const categories = useSelector(state => state.products.categories);

  return (
    <Fragment>
      {categories.length>0 && <footer className={classes.footer}>
          &copy; {year} All Rights Reserved
      </footer>}
    </Fragment>
  )
}

export default Footer