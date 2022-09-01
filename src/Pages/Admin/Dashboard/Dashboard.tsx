import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Data } from "./SidebarData";
import Menu from "./Menu";
import { useSelector, useDispatch } from "react-redux";
import { deletData, loadData } from "../../../Redux/Action";
import { AppDispatch, RootState } from "../../../Redux/Store";


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

export interface navProps {
  left: string;
}

const SideView = styled.nav<navProps>`
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
  const [sidebar, setsidebar] = useState<any>(false);
  const showSidebar = () => setsidebar(!sidebar);
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(loadData());
  }, []);

  const handleedit = (id: any) => {
    console.log(id);
    dispatch(deletData(id));
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
     <Link style={{textDecoration:'none'}} to="/add_catogary"><button style={{display: 'flex', justifyContent: 'flex-end'}} className="btn btn-secondary mt-2 mb-3 mr-2 ms-auto">Add catagory</button></Link>
     
      <div className="d-flex align-items-center">
        <table className="table table-hover text-center">
          <thead>
            <tr className="">
              <th scope="col">S.NO</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Product Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            { data && data.map((data: any) => {
              return (
                <tr className="">
                  <th scope="row">{data.id}</th>
                  <td>{data.category}</td>
                  <td>{data.quantity}</td>
                  <td>{data.price}</td>
                  <td>{data.stock}</td>
                  <td>
                    <img src={data.image} style={{ width: "100px" }} />
                  </td>
                  <td>
                    <button className="btn btn-success">Edit</button>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => handleedit(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
