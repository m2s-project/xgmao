import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../views/header/Header";
import "./layout.css";
import Sidebar from "../views/sidebar/Sidebar";

const Layout = () => {
  const location = useLocation();

  // const { token } = useSelector((state) => state.auth);

  const renderHeader = location.pathname !== "/" ? <Header /> : null;
  const renderSidebar =
    location.pathname !== "/" && location.pathname !== "/home" ? (
      <Sidebar />
    ) : null;
  return (
    <>
      {/* header */}
      {renderHeader}

      {/* navigation */}
      <div className="layout">
        {renderSidebar}
        <Outlet />
      </div>
      {/* footer */}
    </>
  );
};

export default Layout;
