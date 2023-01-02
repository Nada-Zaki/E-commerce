import React from 'react';
import { useField } from 'formik';
import classes from './MyRadioInput.module.css';

const MyRadioInput = (props) => {
    const [field, meta] = useField(props);

    return (
        <>
            <div className={classes["radio-input"]}>
                <input {...field} {...props} />
                <label htmlFor={props.id}>{props.label}</label>
            </div> 
            {meta.touched && meta.error ? (
                <div className={classes.error}>{meta.error}</div>
            ) : null}
        </>
    )
}

export default MyRadioInput