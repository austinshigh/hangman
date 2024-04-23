import React from "react";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <LayoutContainer>
      <Navigation />
      <Outlet />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
