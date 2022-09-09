import { Form, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import TextField from "../../../components/TextField";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./Adminlogin.css";

const AdminLogin = () => {
  const [error, seterror] = useState("");

  interface login_data {
    email: string;
    password: number;
  }

  const navigate = useNavigate();
  const getAdmin = localStorage.getItem("admin");
  console.log("Admin", getAdmin);
  const adminschema = Yup.object().shape({
    email: Yup.string()
      .email("Enter valid email address")
      .required("Email is Required"),
    password: Yup.string()
      .min(6, "Password must be 6 charecters")
      .required("Password is required"),
  });

  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: adminschema,
    onSubmit: (values) => {
      if (getAdmin && getAdmin.length) {
        const AdminLogin = JSON.parse(getAdmin);

        const Admin = AdminLogin.filter((val: any) => {
          if (val.email === values.email && val.password === values.password) {
            navigate("/admin_dashboard");
          } else {
            seterror("Invalid Username and Password");
          }
        });
      }
    },
  });
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = Formik;
  return (
    <div className="container-fluid admin">
      <div className="row admin-login">
        <div className="col-lg-4 forms">
          <FormikProvider value={Formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <h1 className="text-center">Admin Login</h1>
              <p className="Invalid">{error}</p>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email.."
                data-testid="email"
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your Password.."
                data-testid="password"
              />

              <div className="d-grid gap-2">
                <button className="btn btn-block bg-dark text-white shadow-none block mt-3">
                  Login
                </button>
              </div>
              <p className="mt-3 text-center">
                Create a New Account..?
                <Link to="/admin_register">Register here..</Link>
              </p>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
