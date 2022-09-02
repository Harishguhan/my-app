import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleUser, loadData } from "../../../../Redux/Action";
import { AppDispatch, RootState } from "../../../../Redux/Store";
import './EditData.css';
type AuthUser = {
  id?: number;
  catogary?: string;
  quantity?: string;
  price?: string;
  stock?: string;
};

const EditData = () => {
  const [edit, setEdit] = useState<AuthUser>({});
  const [error, setError] = useState<AuthUser>({});
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const editData: any = useSelector((state: RootState) => state?.data);

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
    if (!e.target.value) {
      setError({
        ...error,
        [e.target.name]: `${e.target.name} cannot be blank`,
      });
    }
    else{
        // setError("")
    }
  };

  useEffect(() => {
    dispatch(loadData());
  }, []);
  const filteredData =
    editData && editData.data.find((data: any) => data.id.toString() === id);
  useEffect(() => {
    if (filteredData) {
      setEdit(filteredData);
    }
  }, [filteredData]);

  const handlesubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(getSingleUser(updatevalue));
    navigate("/admin_dashboard");
    // const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    // var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // e.preventDefault();
    // if (!edit.username) {
    //   setError({ ...error, username: "Name cannot be Blank" });
    // } else if (!edit.email) {
    //   setError({ ...error, email: "Email cannot be Blank" });
    // } else if (!edit.email.match(regEx)) {
    //   setError({ ...error, email: "Enter Valid Email Address" });
    // } else if (!edit.mobilenumber) {
    //   setError({ ...error, mobilenumber: "Mobile Number Cannot be blank" });
    // } else if (!edit.mobilenumber.match(phoneno)) {
    //   setError({ ...error, mobilenumber: "Enter Valid Mobile number" });
    // } else if (!edit.city) {
    //   setError({ ...error, city: "CityName cannot be Blank" });
    // } else {
    //   dispatch(editUsers(updatevalue));
    //   navigate("/view");
    // }
  };

  const updatevalue = {
    id: edit.id,
    catogary: edit.catogary,
    quantity: edit.quantity,
    price: edit.price,
    stock: edit.stock,
  };
  return (
    <div className="container-fluid frm">
      <div className="row">
        <h1 className="text-center">Edit the Data</h1>
        <div className="col-lg-6">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWRpdCUyMGRhdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"  className="img-fluid rounded"/>
        </div>
        <div className="col-lg-6">
          <form className="" onSubmit={handlesubmit}>
            <div className="form-group mt-4">
              <label>Catogary Name</label>
              <input
                type="text"
                className="form-control"
                name="catogary"
                value={edit.catogary}
                onChange={(e) => handlechange(e)}
              />
              <span style={{ color: "red" }}>{error.catogary}</span>
            </div>
            <div className="form-group mt-4">
              <label>Quantity</label>
              <input
                type="text"
                className="form-control"
                name="quantity"
                value={edit.quantity}
                onChange={(e) => handlechange(e)}
              />
              <span style={{ color: "red" }}>{error.quantity}</span>
            </div>
            <div className="form-group mt-4">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={edit.price}
                onChange={(e) => handlechange(e)}
              />
              <span style={{ color: "red" }}>{error.price}</span>
            </div>
            <div className="form-group mt-3">
              <label>Stock</label>
              <input
                type="text"
                className="form-control"
                name="stock"
                onChange={(e) => handlechange(e)}
                value={edit.stock}
              />
              <span style={{ color: "red" }}>{error.stock}</span>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-success">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditData;
