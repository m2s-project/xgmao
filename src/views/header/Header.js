import React from "react";
import logo from "../../assets/logo.png";
import "./header.css";

import { Link } from "react-router-dom";
import Profil from "../profil/Profil";

import Search from "../search/Search";
import { useLocation } from "react-router-dom";
const Header = () => {
const {pathname} =useLocation()
  const renderSearh = pathname!=='/home'?<Search />:<div className="header-center">eXpert GMAO</div>
  return (
    <div className="header">
      <div className="header-start">
        <Link to={"/home"}>
          <img src={logo} alt="logo" width={25} />
        </Link>
      </div>
      <div className="header-center">
        {renderSearh}
      </div>
      {/* <div className="header-center">eXpert GMAO</div> */}
      <div className="header-end">
        <Profil />
      </div>
    </div>
  );
};

export default Header;
