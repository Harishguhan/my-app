import React from "react";
import { Form, FormikProvider, useFormik } from "formik";
import TextField from "../../components/TextField";
import * as Yup from "yup";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import customAxios from "../../Axios";
const RegisterForm = () => {
  const navigate = useNavigate();
  const RegisterValidate = Yup.object().shape({
    userName: Yup.string()
      .min(3, "username is too short")
      .max(15, "username must be 15 charecters")
      .required("username is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charecters")
      .required("password is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password Must Be same")
      .required("password is required"),
  });
  const Formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmpassword: "",
    },

    validationSchema: RegisterValidate,
    onSubmit: (values) => {
      localStorage.setItem("staff", JSON.stringify([values]));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { email, password } = values;
      console.log(email,password)
      customAxios
        .post("/auth/signup", { email, password })
        .then((responce) => {
          if (responce.status === 201) {
            navigate("/login");
          } else {
            alert("Failed To register User");
          }
        })
        .catch((error) => console.error(error.message));
      swal({
        title: "User Registerd successfuly",
        text: "",
        icon: "success",
        // button: "Ok",
      });
      navigate("/login");
    },
  });

  const { handleSubmit } = Formik;

  return (
    <>
    <div className="container">
      <div className="row signup-form">
        <h1 className="text-center pt-3">SignUp Form</h1>
        <div className="col-lg-7">
          <img
            src="https://img.freepik.com/free-vector/company-employees-planning-task-brainstorming_74855-6316.jpg?w=1800&t=st=1661748463~exp=1661749063~hmac=1f3b6cace62643ac41ac01268accd083f0e0e3f305106034ab81affe9ba5cfbc"
            className="img-fluid"
            alt="img"/>
        </div>
        <div className="col-lg-5">
          <FormikProvider value={Formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <TextField
                label="userName"
                name="userName"
                type="text"
                data-testid="username"
                placeholder="Enter your Username"
              />
              <TextField
                label="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                data-testid="email"
              />
              <TextField
                label="password"
                name="password"
                type="password"
                placeholder="Enter your Password"
                data-testid="password"
              />
              <TextField
                label="confirm password"
                name="confirmpassword"
                type="password"
                placeholder="Enter your ConfirmPassword"
                data-testid="confirmpassword"
              />
              <div className="d-grid gap-2">
                <button className="btn btn-block btn-info shadow-none block mt-3">
                  Register
                </button>
              </div>
              <p className="mt-3 text-center">
                Admin SignUp <Link to="/admin_register">SignIn here..</Link>
              </p>
              <p className="mt-3 text-center">
                Already Have a Account..<Link to="/login"> SignIn here..</Link>
              </p>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
    </>
  );
};

export default RegisterForm;
