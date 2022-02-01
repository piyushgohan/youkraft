import React, { useState , useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import '../styles/login.css';
import {Formik , Form ,  ErrorMessage } from 'formik';
import InputField from './InputField';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/actions';

function Login() {


  const dispatch = useDispatch();


  const validate = Yup.object({
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is Required"),
    password: Yup.string()
      .min(8, "Password must be more than 8 characters long")
      .required("Password is Required"),
    name : Yup.string()
        .min(2, "Name must be more than 2 characters")
        .required("name is required"),
    age: Yup.string()
    .required("age is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(1, 'Must be atleast 1 digit')
    .max(2, 'Must be maximum 2 digits'),
    phone : Yup.string()
    .required("phone number is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, 'Must be 10 digits')
    .max(10, 'Must be 10 digits'),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
        age: "",
        email : "",
        phone : ""
      }}
      validationSchema={validate}
      onSubmit={ (values)=> {
        dispatch(addUser(values));
      }}
    >
      {(formik) => (
        <Form autoComplete="off" className="form-login">
          <div className="input-fields">
            <PersonIcon className="form-icons" />
            <InputField
              label="name"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <ErrorMessage name="name" component="div"  className="error-message"/>
          <div className="input-fields">
            <LockIcon className="form-icons" />
            <InputField
              label="password"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <ErrorMessage name="password" component="div" className="error-message" />
          <div className="input-fields">
            <CalendarTodayIcon className="form-icons" />
            <InputField
              label="age"
              type="text"
              name="age"
              placeholder="Age"
            />
          </div>
          <ErrorMessage name="age" component="div" className="error-message" />
          <div className="input-fields">
            <PhoneIphoneIcon className="form-icons" />
            <InputField
              label="phone"
              type="text"
              name="phone"
              placeholder="Phone Number"
            />
          </div>
          <ErrorMessage name="phone" component="div" className="error-message" />
          <div className="input-fields">
            <MailOutlineIcon className="form-icons" />
            <InputField
              label="email"
              type="text"
              name="email"
              placeholder="E-mail"
            />
          </div>
          <ErrorMessage name="email" component="div" className="error-message" />
          <button type="submit" className="form-button">
            SUBMIT
          </button>
          <button className="form-button" type="reset">
            RESET
          </button>
        </Form>
        
      )}
    </Formik>
  );
}


export default Login;
