import React from 'react';
import classes from './CheckoutForm.module.css';
import Card from '../UI/Card';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../form-inputs/MyTextInput';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { paymentActions } from '../../store/payment-reducer';



const CheckoutForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const initialValues = {firstname:"", lastname:"", address:"",mobile:"", email:"", postalcode:""};
    const validationSchema = Yup.object({
        firstname: Yup.string().required('Required'),
        lastname: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        mobile: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        postalcode:  Yup.number().typeError('Invalid postal code').positive().integer().required('Required')
    });

    const handleGoToCart = () => {
        history.replace('/cart')
    }

    const submitHandler = (values, {setSubmitting}) => {
        dispatch(paymentActions.saveCustomerData(values));
        history.push('/payment')
        setSubmitting(false);
    }
    return (
        <section className={`${classes.checkout} centered`}>
            <Card className={`${classes["checkout-card"]} centered`}>
                <h2>Shipping Address</h2>
                <Formik 
                    initialValues={initialValues} 
                    validationSchema={validationSchema}
                    onSubmit={submitHandler} 
                >
                    <Form> 
                    <div className={classes["form-control"]}>
                    <MyTextInput
                        name="firstname"
                        type="text" 
                        placeholder="First name *"
                    />
                    <MyTextInput
                        name="lastname"
                        type="text"
                        placeholder="Last name *"
                    />
                    <MyTextInput
                        name="email"
                        type="email"
                        placeholder="Email *"
                    />
                    <MyTextInput
                        name="mobile"
                        type="text"
                        placeholder="Mobile *"
                    />
                    <MyTextInput
                        name="address"
                        type="text"
                        placeholder="Address *"
                    />
                    <MyTextInput
                        name="postalcode"
                        type="text"
                        placeholder="Postal code *"
                    />
                    </div>
                    <div className={classes.actions}>
                    <button className="btn sec-btn" onClick={handleGoToCart}>Back to cart</button>
                    <button type="submit" className="btn primary-btn">Proceed to pay</button>
                    </div>
                    </Form>
                </Formik>
            </Card>
        </section>
    )
}

export default CheckoutForm