import React from 'react';
import { useField } from 'formik';
import classes from './MyTextInput.module.css';
import { FaUser, FaLock } from 'react-icons/fa'


const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const icon = props.name==="username" ? 
    <FaUser /> : 
    props.name === "password" ? 
    <FaLock /> : null;

    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <div className={classes["text-input"]}>
            <i>{icon}</i>
            <input {...field} {...props} />
            </div>
            {meta.touched && meta.error ? (
                <div className={classes.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};

export default MyTextInput;