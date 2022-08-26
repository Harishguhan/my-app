import React from "react";
import '../App.css';
import { ErrorMessage,useField } from "formik";
const TextField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} type="text" />
      <ErrorMessage component="div" name={field.name}  className="error" />
    </div>
  );
};

export default TextField;
