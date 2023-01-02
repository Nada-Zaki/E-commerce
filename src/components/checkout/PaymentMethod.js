import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import classes from './PaymentMethod.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import OrderSummary from './OrderSummary';
import { cartActions } from '../../store/cart-reducer';
import MyRadioInput from '../form-inputs/MyRadioInput';



const PaymentMethod = () => {
    const {items,subTotal} = useSelector(state => state.cart);
    const history = useHistory();
    const dispatch = useDispatch();

    const total = `$${subTotal?.toFixed(2)}`;

    const initialValues = {paymentMethod:''};
    const validationSchema = Yup.object({
        paymentMethod: Yup.string().required('Please Select The Payment Method'),
    });

    const handleSubmit = (values, {setSubmitting}) => {
        dispatch(cartActions.emptyCart());
        setSubmitting(false);
        history.replace('/confirmation');
    }

    return (
        <section className={`${classes.payment} centered`}>
            <Card className={classes["payment-card"]}>
                <OrderSummary items={items} total={total} />
                <h2>Payment method</h2>
                <Formik initialValues={initialValues} 
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                >
                    <Form className={classes["form-control"]}>
                        <MyRadioInput
                        id="cash" 
                        name="paymentMethod"
                        type="radio" 
                        label="Cash on delivery"
                        value="cash"
                        />
                        
                        <div className={classes.actions}>
                            <Link to="/checkout" className={`${classes["payment-btn"]} btn sec-btn`}>Back</Link>
                            <button type='submit' className={`${classes["payment-btn"]} btn primary-btn`}>Place Order</button>
                        </div>
                    </Form>
                </Formik>
            </Card>
        </section>
    )
}

export default PaymentMethod