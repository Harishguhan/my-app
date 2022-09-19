import React, { useState } from "react";
import { Link, To } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: white;
    background: #037994;
    border-left: 4px solid #1aa4c4;
    cursor: pointer;
  }
`;
const Label = styled.span`
  margin-left: 16px;
`;
const DropDownLink = styled(Link)`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  background-color: #59b4c9;

  &:hover {
    color: white;
    background: #037994;
    border-left: 4px solid #1aa4c4;
    cursor: pointer;
  }
`;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Menu = ({ item }: any) => {
  const [DropDown, setDropDown] = useState(false);
  const showDrop = () => setDropDown(!DropDown);
  return (
    <>
      <SidebarLink to={item.path} onClick={item.DropDown && showDrop}>
        <div>
          {item.icon}
          <Label>{item.title}</Label>
        </div>
        <div>
          {item.DropDown && DropDown
            ? item.iconOpened
            :item.iconClosed
            }
        </div>
      </SidebarLink>
      {DropDown &&
        item.DropDown.map(
          (items: {
            path: To;
            id: React.Key | null | undefined;
            icon:
              | string
              | number
              | boolean
              | React.ReactElement<
                  
                  string
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            title:
              | string
              | number
              | boolean
              | React.ReactElement<
                  
                  string 
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          }) => {
            return (
              <DropDownLink to={items.path} key={items.id}>
                <div>
                  {items.icon}
                  <Label>{items.title}</Label>
                </div>
              </DropDownLink>
            );
          }
        )}
    </>
  );
};

export default Menu;
