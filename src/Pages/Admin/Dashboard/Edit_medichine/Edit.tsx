import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { getSingleUser, loadData } from "../../../../Redux/Action";
import { AppDispatch, RootState } from "../../../../Redux/Store";
import './EditData.css';
import { ProductValue } from '../../../../GlobalTypes/globaltypes';
type AuthUser = {
  id?: number;
  catogary?: string;
  quantity?: string;
  price?: string;
  stock?: string;
};
interface editvalue {
  id:number | undefined,
  catogary:string | undefined,
  quantity:string | undefined,
  price:string | undefined,
  stock:string | undefined

}
const EditData = () => {
  const [edit, setEdit] = useState<AuthUser>({});
  const [error, setError] = useState<AuthUser>({});
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  }, [dispatch]);
  const filteredData =
    editData && editData.data.find((data:ProductValue) => data.id.toString() === id);
  useEffect(() => {
    if (filteredData) {
      setEdit(filteredData);
    }
  }, [filteredData]);

  const handlesubmit = (e: React.FormEvent) => {
    
    e.preventDefault();
    if (!edit.catogary) {
      setError({ ...error, catogary: "catagory cannot be Blank" });
    } else if (!edit.quantity) {
      setError({ ...error, quantity: "Quantity cannot be Blank" });
    } 
      else if (!edit.price) {
      setError({ ...error, price: "Price Number Cannot be blank" });
    }
     else if (!edit.stock) {
      setError({ ...error, stock: "stock cannot be Blank" });
    } else {

      dispatch(getSingleUser(updatevalue));
      swal("Product", "Update successfully", "success");
      navigate("/admin_dashboard");
    }  
  };

  const updatevalue:editvalue = {
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
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWRpdCUyMGRhdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"  className="img-fluid rounded" alt="edit"/>
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
            <div className=" d-flex justify-content-between mt-3">
            <Link to="/admin_dashboard"><button className="btn btn-secondary">
                Cancel
              </button></Link>
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
