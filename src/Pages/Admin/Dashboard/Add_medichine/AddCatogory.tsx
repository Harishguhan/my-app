import { Form, FormikProvider, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Add.css';
import { AppDispatch } from "../../../../Redux/Store";
import { AddData } from "../../../../Redux/Action";
import TextField from "../../../../components/TextField";
const AddCatogory = () => {

  const dispatch = useDispatch<AppDispatch>();
  let navigate = useNavigate();
  const AddValidate = Yup.object().shape({
    catogary:Yup.string()
    .min(3,'name is too short..')
    .required(' Name is Required '),
    quantity:Yup.string()
    .required(' Quantity is Required '),
    price:Yup.string()
    .required(' Price is Required '),
    stock:Yup.string()
    .required(' stock is Required '),
    image:Yup.string()
    .required(' Image is Required ')
  });

  const Formik = useFormik({
    initialValues: {
      category: "",
      quantity: "",
      price: "",
      stock: "",
      image: "",
    },
    validationSchema: AddValidate,
    onSubmit: (values) => {
      console.log(values)
      // const { catogary,quantity,price,stock,image } = values;
    dispatch(AddData(values))
    navigate('/admin_dashboard')
    },
  });
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = Formik;
  return (
    <div className="container wel">
      <div className="row">
        <h1 className="mb-5 text-center">Add New category</h1>
        <div className="col-lg-6">
          <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"  className="img-fluid rounded"/>
        </div>
        <div className="col-lg-6">
          <FormikProvider value={Formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <TextField label="Catogory Name" name="category" type="text" />
              <TextField label="Quantity" name="quantity" type="text" />
              <TextField label="Price" name="price" type="text" />
              <TextField label="Stock" name="stock" type="text" />
              <TextField label="Image" name="image" type="file" />
            <div className="d-grid gap-2">
              <button className="btn btn-block btn-info shadow-none block mt-3">
                Register
              </button>
            </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};

export default AddCatogory;
