import { Form, Formik, FormikProvider, useFormik } from 'formik'
import React from 'react'
import TextField from '../../components/TextField'
import * as Yup from 'yup'
const Login = () => {
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
            alert("correct details")
          }
          else{
            alert('invlid details')
          }
        });
        
      }
    }
  })

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = Formik;
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-5">
          <h1>Login Form</h1>
          <FormikProvider value={Formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <TextField label="Email" name="email" type="email" />
              <TextField label="password" name="password" type="password" />
              <div className="d-grid gap-2">
                <button className="btn btn-block btn-success shadow-none block mt-3">
                  Login
                </button>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  )
}

export default Login