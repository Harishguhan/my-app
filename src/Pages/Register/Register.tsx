import { Form, Formik, FormikProvider, useFormik } from "formik";
import React from "react";
import TextField from "../../components/TextField";
import * as Yup from 'yup';
import './Register.css';
const RegisterForm = () => {

const RegisterValidate = Yup.object().shape({
    userName:Yup.string()
    .min(3,'username is too short')
    .max(15,'username must be 15 charecters')
    .required('username is required'),
    email:Yup.string()
    .email("Invalid Email")
    .required('Email is required'),
    password:Yup.string()
    .min(6,"Password must be at least 6 charecters")
    .required('password is required'),
    confirmpassword:Yup.string()
    .oneOf([Yup.ref('password'),null],'Password Must Be same')
    .required('password is required'),
})

  const Formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
   validationSchema:RegisterValidate,
    onSubmit: () => {},
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = Formik;

  return (
    <FormikProvider value={Formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <TextField label="userName" name="userName" type="text" />
        <TextField label="email" name="email" type="email" />
        <TextField label="password" name="password" type="password" />
        <TextField label="confirm password" name="confirmpassword" type="password" />
        <button className="btn btn-info">Register</button>     
      </Form>
    </FormikProvider>
  );
};

export default RegisterForm;
