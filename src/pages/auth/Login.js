import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import classes from './Login.module.css';
import MyTextInput from '../../components/form-inputs/MyTextInput';
import { login } from '../../store/auth-actions';
import Card from '../../components/UI/Card';


const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const target = location.state && location.state.from;
  const {loginLoading} = useSelector(state => state.auth);

  const initialValues = {username:"", password:""};
  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().min(5,"Password must be at least 5 characters").required('Required')
  });
  const submitHandler = (values, {setSubmitting}) => {
    dispatch(login(values,history,target));
    setSubmitting(false);
  }

  return (
    <section className={`${classes.login} centered`}>
      <Card className={`${classes.card} centered`}>
        <div className={classes["test-credentials"]}>
          <h5>Testing Credentials:</h5>
          <p>Username: mor_2314</p>
          <p>Password: 83r5^_</p>
        </div>
        <h2>Login</h2>
        <Formik 
          initialValues={initialValues} 
          validationSchema={validationSchema}
          onSubmit={submitHandler} 
        >
          <Form className={classes["form-control"]}>          
            <MyTextInput 
              name="username"
              type="text" 
              placeholder="Username"
            />
            <MyTextInput
              name="password"
              type="password"
              placeholder="Password"
            />
            <button type="submit" className="btn">{loginLoading ? "Processing..." :"Login"}</button>
          </Form>
        </Formik>
        </Card>
    </section>
  )
}

export default Login