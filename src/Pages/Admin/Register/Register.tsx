import { Form, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import TextField from "../../../components/TextField";
import * as Yup from "yup";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import './admin-register.css';
  

const Register = () => {

    const [admin,setAdmin] = useState({});
    let navigate = useNavigate();
    const validate = Yup.object().shape({
        username:Yup.string()
        .min(3,'Admin username is too short')
        .max(10,'usernam only contain 10 charecters only')
        .required('username is required'),
        email:Yup.string()
        .email('Invalid Email Address')
        .required("Email is required"),
        password:Yup.string()
        .min(6,"password must be 6 charecters")
        .required("Password is required"),
        confirmpassword:Yup.string()
        .oneOf([Yup.ref('password'),null],"Password Must Be Same")
        .required("Confirm password is required")
    })
    const Formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            password:'',
            confirmpassword:'',
        },
        validationSchema:validate,
        onSubmit:(values) =>{
          console.log(values)
            localStorage.setItem("admin",JSON.stringify([values]));
            setAdmin(values);
            console.log("admindetail",admin)
            swal({
                title: "Admin Registerd successfuly",
                text: "",
                icon: "success",
                // button: "Ok",
              });
              navigate('/admin_login')
        },
    });
    const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = Formik;
  return (
    <div className="container">
      <div className="row admin_register">
        <div className="col-lg-7">
          <img
            src="https://images.unsplash.com/photo-1474377207190-a7d8b3334068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWRtaW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-lg-5">
          <h1 className="text-center">Admin SignUp</h1>
          <FormikProvider value={Formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <TextField
                label="Enter your Username"
                name="username"
                type="text"
              />
              <TextField label="Enter your Mail id" name="email" type="email" />
              <TextField
                label="Enter your Password"
                name="password"
                type="password"
              />
               <TextField
                label="Enter your Confirm Password"
                name="confirmpassword"
                type="password"
              />
              <div className="d-grid gap-2">
                <button className="btn btn-block bg-dark text-white shadow-none block mt-3">
                  Register
                </button>
              </div>
            </Form>
            <p className='mt-3 text-center'>Already Have a Account..?<Link to='/admin_login'>SignIn here..</Link></p>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};

export default Register;
