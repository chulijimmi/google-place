import React from "react";
import { Outlet } from "react-router-dom";
import FooterResponsive from "./FooterResponsive";
import HeaderResponsive from "./HeaderResponsive";

function PageLayout() {
  return (
    <React.Fragment>
      <HeaderResponsive />
      <Outlet />
      <FooterResponsive />
    </React.Fragment>
  );
}

export default PageLayout;
