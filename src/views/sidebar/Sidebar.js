import React from "react";
import "./sidebar.css";
import { modulesList } from "../module";
import Icon from "@mdi/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      {modulesList.map((item, index) => (
        <NavLink to={`/home/${item.route}`} className="sidebar-items">
        <Icon path={item.icon} size={1.2} color={"blue"} title={item.name}/>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
