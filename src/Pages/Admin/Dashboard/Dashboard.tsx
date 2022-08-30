import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Data } from "./SidebarData";
import Menu from "./Menu";
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
const SideView = styled.nav`
  background: #085f73;
  min-height: 100vh;
  width: 250px;
  display: flex;
  justify-content: center;
  position: fixed;
  transition: 350ms;
  top: 0;
  left: ${({ sidebar }: any) => (sidebar ? "0" : "-100%")};
  z-index: 10;
`;
const SideViewWrap = styled.div`
  width: 100%;
`;
const Dashboard = () => {
  const [sidebar, setsidebar] = useState<boolean>(false);
  const showSidebar = () => setsidebar(!sidebar);
  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <SideView sidebar={sidebar}>
        <SideViewWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {Data.map((item, index) => {
            return <Menu item={item} key={index} />;
          })}
        </SideViewWrap>
      </SideView>
    </>
  );
};

export default Dashboard;
