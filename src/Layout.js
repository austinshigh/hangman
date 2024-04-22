import React from "react";
import "./Layout.css";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
