import React from 'react';
import { useField } from 'formik';
import '../styles/login.css';

const InputField = ({ label, ...props }) => {
    const [field , meta] = useField(props);
  return (
    <input
      htmlFor={field.name}
      className="form-input"
      {...field}{...props}
      autoComplete="off"
    />
    
  );
};

export default InputField;
