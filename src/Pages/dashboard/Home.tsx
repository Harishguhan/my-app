import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import customAxios from "../../Axios";
import { loadData } from "../../Redux/Action";
import { AppDispatch, RootState } from "../../Redux/Store";
import { ValueContext } from "../../Context/Context";
import { ProductValue } from "../../GlobalTypes/globaltypes";
import "./Home.css";

const Home = () => {
  const value = useContext(ValueContext);
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [dat, setdata] = useState([]);
  const [results, setsearchResults] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [table, settable] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputEl = useRef<any>("");
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.data);
  useEffect(() => {
    customAxios
      .get("/auth/employees")
      .then((responce) => {
        console.log(responce?.data?.data?.employees);
      })
      .catch((err) => console.error(err.message));
  }, []);
  const searchHandler = (searchItems: string) => {
    setSearchItem(searchItems);

    if (searchItems !== "") {
      const newResults = data.filter((fillproduct: ProductValue) => {
        return Object.values(fillproduct)
          .join(" ")
          .toLowerCase()
          .includes(searchItem.toLowerCase());
      });
      newResults.length === 0 && settable(false);
      newResults.length !== 0 && settable(true);
      setsearchResults(newResults);
    } else {
      setsearchResults(data);
    }
  };
  const handleedit = useCallback(
    (id: number | string) => {
      navigate(`/edit/${id}`);
    },
    [navigate]
  );

  const getSearchTerm = () => {
    searchHandler(inputEl.current.value);
  };

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-center mt-3 mb-3 head">pharmacy inventory system</h1>
      <form className="form-inline col-lg-3 col-sm-12 d-flex justify-content-end ms-auto search-bar">
        <input
          className="searchbar"
          type="search"
          placeholder="Search here.."
          aria-label="Search"
          value={searchItem}
          ref={inputEl}
          onChange={getSearchTerm}
        />
        <img src="https://www.freepnglogos.com/uploads/search-png/search-icon-line-icon-icon-24.png" width={"50px"} style={{position:"absolute",right:"30px",top:"135px"}} />
      </form>
      <p>Hospital Name:{value && value.hospitalname}</p>
      <p>Address:{value && value.Address}</p>
      {table ? (
        <div className="container">
          <div className="d-flex align-items-center">
            <table className="table table-hover text-center mt-5">
              <thead>
                <tr className="t-head">
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
                    data.map((Products: ProductValue) => {
                      return (
                        <tr key={Products.id}>
                          <th scope="row">{Products.id}</th>
                          <td>{Products.catogary}</td>
                          <td>{Products.quantity}</td>
                          <td>{Products.price}</td>
                          <td>{Products.stock}</td>
                          <td>
                            <button
                              className="edit-btn"
                              onClick={() => handleedit(Products.id)}
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
                  {results.length > 0 &&
                    results.map((filterProduct: ProductValue) => {
                      return (
                        <tr className="" key={filterProduct.id}>
                          <th scope="row">{filterProduct.id}</th>
                          <td>{filterProduct.catogary}</td>
                          <td>{filterProduct.quantity}</td>
                          <td>{filterProduct.price}</td>
                          <td>{filterProduct.stock}</td>
                          <td>
                            <button
                              className="edit-btn"
                              onClick={() => handleedit(filterProduct.id)}
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
      ) : (
        <p style={{ textAlign: "center", fontSize: "30px",fontWeight:"bold" }}>
          No Product Available...
        </p>
      )}
    </>
  );
};

export default Home;
