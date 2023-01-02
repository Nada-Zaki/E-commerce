import React, { Fragment } from 'react';
import Footer from './Footer';
import classes from './Layout.module.css';
import MainHeader from './MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
        <MainHeader />
        <main className={classes.main}>
            {props.children}
        </main>
        <Footer />
    </Fragment>
  )
}

export default Layout