import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadData } from "../../Redux/Action";
import { AppDispatch, RootState } from "../../Redux/Store";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.data);
  useEffect(() => {
    dispatch(loadData());
  }, []);

  const handleedit = (id:any) =>{
    navigate(`/edit_category/${id}`)
  } 

  return (
    <div className="container">
      <div className="d-flex align-items-center">
        <table className="table table-hover text-center">
          <thead>
            <tr className="">
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            { data && data.map((data: any) => {
              return (
                <tr className="">
                  <th scope="row">{data.id}</th>
                  <td>{data.catogary}</td>
                  <td>{data.quantity}</td>
                  <td>{data.price}</td>
                  <td>{data.stock}</td>
                  <td>
                    <button className="btn btn-success" onClick={() => handleedit(data.id)}>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
