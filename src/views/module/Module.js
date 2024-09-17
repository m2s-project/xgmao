import React from "react";
import Icon from "@mdi/react";


import { NavLink } from "react-router-dom";
import "./module.css";

const Module = ({name, icon, route}) => {
  return (
    <div className="modules">
      <div className="module-icon col-12">
        <div className="module-filter">
          <Icon path={icon} size={5}  color={"blue"}/>
          <NavLink to={route} className="module-btn">Ouvrir</NavLink >
        </div>
      </div>
      <div className="module-title">
        <h2 className="module-name">{name}</h2>
      </div>
    </div>
  );
};

export default Module;
