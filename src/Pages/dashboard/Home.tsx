import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import customAxios from "../../Axios";
import { loadData } from "../../Redux/Action";
import { AppDispatch, RootState } from "../../Redux/Store";
import './Home.css';
const Home = () => {
  const navigate = useNavigate();
  const [dat,setdata] = useState([]);
  const [results, setsearchResults] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const inputEl = useRef<any>("");
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.data);
  useEffect(() => {
    customAxios
    .get('/auth/employees')
    .then((responce) =>{
      setdata(responce?.data?.data?.employees)
    })
    .catch((err) => console.error(err.message)) 
  }, []);

  const searchHandler = (searchItem: string) => {
    setSearchItem(searchItem);
    if (searchItem !== "") {
      const newResults = data.filter((data: any) => {
        return Object.values(data)
          .join(" ")
          .toLowerCase()
          .includes(searchItem.toLowerCase());
      });
      setsearchResults(newResults);
    } else {
      setsearchResults(data);
    }
  };
  const handleedit = (id: number | string) => {
    navigate(`/edit/${id}`);
  };

  const getSearchTerm = () => {
    searchHandler(inputEl.current.value);
  };
  useEffect(() => {
    dispatch(loadData());
  },[])
  return (
    <>
      <h1 className="text-center mt-3 mb-3">Pharmacy Management System</h1>
      <form className="form-inline col-lg-3 col-sm-12 d-flex justify-content-end mx-auto">
        <input
          className="form-control mr-sm-2 shadow-none"
          type="search"
          placeholder="Search here.."
          aria-label="Search"
          value={searchItem}
          ref={inputEl}
          onChange={getSearchTerm}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <div className="container">
        <div className="d-flex align-items-center">
          <table className="table table-hover text-center mt-5">
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
            {searchItem.length < 1 ? (
              <tbody>
                {data &&
                  data.map((data: any) => {
                    return (
                      <tr className="">
                        <th scope="row">{data.id}</th>
                        <td>{data.catogary}</td>
                        <td>{data.quantity}</td>
                        <td>{data.price}</td>
                        <td>{data.stock}</td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => handleedit(data.id)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            ) : (
              <tbody>
                {results &&
                  results.map((data: any) => {
                    return (
                      <tr className="">
                        <th scope="row">{data.id}</th>
                        <td>{data.catogary}</td>
                        <td>{data.quantity}</td>
                        <td>{data.price}</td>
                        <td>{data.stock}</td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => handleedit(data.id)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            )}
          </table>     
        </div>
      </div>
    </>
  );
};

export default Home;
