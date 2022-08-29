import React from "react";
import '../App.css';
import { ErrorMessage,useField } from "formik";
const TextField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input className={`form-control shadow-none mt-3 ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} />
      <ErrorMessage component="div" name={field.name}  className="error" />
    </div>
  );
};

export default TextField;
