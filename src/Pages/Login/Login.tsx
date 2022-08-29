import { Form, Formik, FormikProvider, useFormik } from 'formik'
import React, { useState } from 'react'
import TextField from '../../components/TextField'
import * as Yup from 'yup';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [error,seterror] = useState('');
  const navigate = useNavigate();
  const getuser = localStorage.getItem("staff");

  const loginvalidate = Yup.object().shape({
    email:Yup.string()
    .min(2,"too short")
    .email("Invalid Email Address")
    .required("Email is Required"),
    password:Yup.string()
    .required("Password is Required")
  });

  const Formik = useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validationSchema:loginvalidate,
    onSubmit:(data) =>{
      if(getuser && getuser.length){
        const staffdata = JSON.parse(getuser);
        console.log(staffdata)
        const stafflogin = staffdata.filter((datas:any) =>{
          if(datas.email === data.email && datas.password === data.password){
            navigate('/home')
          }
          else{
            seterror('Invalid credentials')
            // swal({
            //   title: "invalid credentials",
            //   text: "",
            //   icon: "warning",
            //   // button: "Ok",
            // });
          }
        });
        
      }
    }
  })

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = Formik;
  return (
    <div className='container login-form'>
      <div className="row">
      <div className='col-lg-7'>
        <img src='https://img.freepik.com/free-photo/log-secured-access-verify-identity-password-concept_53876-124066.jpg?w=1800&t=st=1661768747~exp=1661769347~hmac=bdc6d2988dac13e1b95497732340fd7506cd1cb12e2c845f344f79b7fabf908f' className='img-fluid rounded' />
      </div>
        <div className="col-lg-4 mt-5">
          <p className='small-text'>Nice to See you again</p>
        <h1 className='text-center'>Welcome Back</h1> 
          <FormikProvider value={Formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <p className='err'>{error}</p>
              <TextField label="Email" name="email" type="email"  />
              <TextField label="password" name="password" type="password" />
              <div className="d-grid gap-2">
                <button className="btn btn-block btn-success shadow-none block mt-3">
                  Login
                </button>
              </div>
              <p className='mt-3 text-center'>Create a New Account..?<Link to='/'>Register here..</Link></p>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  )
}

export default Login