import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './Confirmation.module.css';

const Confirmation = () => {
    const customerData = useSelector(state => state.payment.customerData);

    return (
        <section className={`${classes.confirmation} centered`}>
            <div className={`${classes.content} centered`}>
                <h2>Thank you for your purchase, {customerData.firstname}</h2>
                <p>Order Ref: {parseInt(Math.random()*100000000)}</p>
            </div>
            <Link className='btn' to='/products'>Back to home</Link>
        </section>
    )
}

export default Confirmation