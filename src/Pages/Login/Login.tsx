import { Form, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import TextField from "../../components/TextField";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import customAxios from "../../Axios";

interface Datatype {
  id: number;
  catogary: string;
  quantity: number;
  price: number;
  stock: string;
  email: string;
  password: string;
}

const Login = () => {
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  const getuser = localStorage.getItem("staff");
  const getAdmin = localStorage.getItem("admin");

  const loginvalidate = Yup.object().shape({
    email: Yup.string()
      .min(2, "too short")
      .email("Invalid Email Address")
      .required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

    const Formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginvalidate,
      onSubmit: (data) => {
        if (getuser && getuser.length) {
          const staffdata = JSON.parse(getuser);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars, array-callback-return
          staffdata.filter((datas: Datatype) => {
            if (datas.email === data.email && datas.password === data.password) {
              customAxios
                .post("/auth/login", { email: data.email })
                .then((responce) => {
                  console.log("responce.data", responce);
                  if (responce?.data?.status === "Success") {
                    localStorage.setItem("access_token", responce.data.token);
                    localStorage.setItem(
                      "refresh_token",
                      responce.data.refreshToken
                    );
                    navigate("/home");
                  } else {
                    alert("Login Failed");
                  }
                })
                .catch((err) => console.error(err.message));
            }
          });
        }
        if (getAdmin && getAdmin.length) {
          const admindata = JSON.parse(getAdmin);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars, array-callback-return
          admindata.filter((value: Datatype) => {
            if (
              value.email === data.email &&
              value.password === data.password
            ) {
              navigate("/admin_dashboard");
            } else {
              seterror("invalid login details");
            }
          });
        }
      },
    });

  const { handleSubmit } = Formik;
  return (
    <div className="container login-form">
      <div className="row">
        <div className="col-lg-7">
          <img
            src="https://img.freepik.com/free-photo/log-secured-access-verify-identity-password-concept_53876-124066.jpg?w=1800&t=st=1661768747~exp=1661769347~hmac=bdc6d2988dac13e1b95497732340fd7506cd1cb12e2c845f344f79b7fabf908f"
            className="img-fluid rounded"
            alt="img"
          />
        </div>
        <div className="col-lg-4 mt-5">
          <p className="small-text">Nice to See you again</p>
          <h1 className="text-center">Welcome Back</h1>
          <FormikProvider value={Formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <p className="err">{error}</p>
              <TextField
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                data-testid="email"
              />
              <TextField
                label="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                data-testid="password"
              />
              <div className="d-grid gap-2">
                <button className="btn btn-block btn-success shadow-none block mt-3">
                  Login
                </button>
              </div>
              <p className="mt-3 text-center">
                Create a New Account..?
                <Link to="/register">Register here..</Link>
              </p>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};

export default Login;
