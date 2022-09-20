import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Data } from "./SidebarData";
import Menu from "./Menu";
import { useSelector, useDispatch } from "react-redux";
import { deletData, loadData } from "../../../Redux/Action";
import { AppDispatch, RootState } from "../../../Redux/Store";
import swal from "sweetalert";
import { ValueContext } from "../../../Context/Context";
import { ProductValue } from "../../../GlobalTypes/globaltypes";
import "../Dashboard/Add_medichine/Add.css";
const Nav = styled.div`
  background: #085f73;
  height: 80px;
  display: flex;
  justify-conetent: flex-start;
  align-items: center;
`;
const NavIcon = styled(Link)`
  margin-left: 2rem;
  color: white;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    color: white;
  }
`;

export interface NavProps {
  left: string | boolean;
}

const SideView = styled.nav<NavProps>`
  background: #085f73;
  min-height: 100vh;
  width: 250px;
  display: flex;
  justify-content: center;
  position: fixed;
  transition: 350ms;
  top: 0;
  left: ${(props) => (props.left ? `0` : `-100%`)};
  z-index: 10;
`;
const SideViewWrap = styled.div`
  width: 100%;
`;

const Dashboard = () => {
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setsearchResults] = useState([]);
  const [table, settable] = useState(true);
  const value = useContext(ValueContext);
  const [sidebar, setsidebar] = useState<string | boolean>(false);
  const showSidebar = () => setsidebar(!sidebar);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputEl = useRef<any>("");
  const { data } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

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

  const handledelete = useCallback(
    (id: number) => {
      console.log("delete function clicked");
      swal({
        title: "Are you sure?",
        text: "You Want to Delete this..?",
        icon: "warning",
        // buttons: "true",
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          dispatch(deletData(id));
          swal("Product has been deleted!", {
            icon: "success",
          });
        }
      });
    },
    [dispatch]
  );
  const handleedit = useCallback(
    (id: number) => {
      navigate(`/edit_category/${id}`);
    },
    [navigate]
  );
  const getSearchTerm = () => {
    searchHandler(inputEl.current.value);
  };
  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <SideView left={sidebar}>
        <SideViewWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {Data.map((item, index) => {
            return <Menu item={item} key={index} />;
          })}
        </SideViewWrap>
      </SideView>

      <Link style={{ textDecoration: "none" }} to="/add_catogary">
        <button className="d-flex justify-content-end ms-auto add-btn">
          Add catagory
        </button>
      </Link>
      <form className="form-inline d-flex mb-4 col-lg-3 col-sm-12 d-flex justify-content-end mx-auto">
        <input
          className="form-control mr-sm-2 d-flex justify-content-end shadow-none"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchItem}
          ref={inputEl}
          onChange={getSearchTerm}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <p>Hospital Name:{value && value.hospitalname}</p>
      <p>Address:{value && value.Address}</p>
      {table ? (
        <div className="d-flex align-items-center mt-5">
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
            {searchItem.length < 1 ? (
              <tbody>
                {data &&
                  data.map((Products: ProductValue) => {
                    return (
                      <tr className="" key={Products.id}>
                        <th scope="row">{Products.id}</th>
                        <td>{Products.catogary}</td>
                        <td>{Products.quantity}</td>
                        <td>{Products.price}</td>
                        <td>{Products.stock}</td>
                        <td>
                          <button
                            className="btn border border-3 mx-3"
                            onClick={() => handleedit(Products.id)}
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </button>
                          <button
                            className="btn border border-3 mx-2"
                            onClick={() => handledelete(Products.id)}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            ) : (
              <tbody>
                {searchResults.length > 0
                  && searchResults.map((filterproduct: ProductValue) => {
                      return (
                        <tr className="" key={filterproduct.id}>
                          <th scope="row">{filterproduct.id}</th>
                          <td>{filterproduct.catogary}</td>
                          <td>{filterproduct.quantity}</td>
                          <td>{filterproduct.price}</td>
                          <td>{filterproduct.stock}</td>
                          <td>
                            <button
                              className="btn border border-3 mx-3"
                              onClick={() => handleedit(filterproduct.id)}
                            >
                              <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button
                              className="btn border border-3 mx-2"
                              onClick={() => handledelete(filterproduct.id)}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                }
              </tbody>
            )}
          </table>
        </div>
      ) : (
        <p style={{ textAlign: "center", fontSize: "30px",fontWeight:"bold" }}>
          No Product Available...
        </p>
      )}
    </>
  );
};

export default Dashboard;
